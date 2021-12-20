 import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera'
import { Directory, Filesystem } from '@capacitor/filesystem'
import { LoadingController, Platform } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { read } from 'fs';
/**
 * This is directory where images are going to get stored.
 */
const IMAGE_DIR = "stored-images"


/**
 * This is just an exmaple how our data will be passed in through a function
 */
interface LocalFile {
  name: string;
  path: string;
  data: string;
}

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.page.html',
  styleUrls: ['./insurance.page.scss'],
})
export class InsurancePage {
 images: LocalFile[] = [];
  insurances = [];
  constructor(private platform: Platform, private loadingCtrl: LoadingController, private photoViewer: PhotoViewer) {

  }
  /**
   * NEW OBJECTIVE
   * I want to make a upload button for all images for the first version. 
   * The picture that was used on a specific upload button will display there. 
   * I may need to give Each a unqiue id that way it's stored in the same place
   * I can make seperate directories (Redudant probably though)
   * 
   */
  async ngOnInit() {
    this.loadFiles();
  }


  async loadFiles() {
    this.images = []

    const loading = await this.loadingCtrl.create({
      message: 'Loading data...',
    });

    await loading.present();

    Filesystem.readdir({
      directory: Directory.Data,
      path: IMAGE_DIR
    }).then(result => {
      console.log('HERE: ', result)
      this.loadFileData(result.files)
    }, async err => {
      console.log('err: ', err);
      
      await Filesystem.mkdir({
        directory: Directory.Data,
        path: IMAGE_DIR
      });
    }).then(_ => {
      loading.dismiss();
    });
  }

  async loadFileData(fileNames: string[]) {
    for (let f of fileNames) {
      const filePath = `${IMAGE_DIR}/${f}`;

      const readFile = await Filesystem.readFile({
        directory: Directory.Data,
        path: filePath
      });

      this.images.push({
        name: f,
        path: filePath,
        data: `data:image/jpeg;base64,${readFile.data}`
      })

      console.log('READ: ', readFile)
    }
  }


  EditContact() {
    // todo: route to an "id" page?
  }
  DeleteContact() {
    // todo: filter local storage contacts array against ID
  }
  ionViewWillEnter() {
    // # If new contact is entered, before component mounts, refresh from local storage
    this.insurances = JSON.parse(localStorage.getItem('INSURANCES'))
    console.log("I just entered contacts page");
  }
  ngOnDestroy() {
    console.log("The stack for tab two 'contacts' has been destroyed");
  }

  async selectPhoto() {
    
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing:false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos
      });
      console.log(image);
      if (image) {
        this.saveImage(image);
      }
      var imagePath = image.webPath;
    /**
     * going 
     */
    this.loadFiles();
    
  }
  async saveImage(photo: Photo) {
    
    /**
     * This is grabbing the passed in image from the selectPhoto(). Then passes this const into the readAsBase64() function.
     */
    const base64Data = await this.readAsBase64(photo);
    console.log(base64Data);

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      /**
       * THe Data firectory on iOS wil yse the Documents directory 
       * On Android it's the directory holding application files. 
       * Files will be deleted when application is uninstalled. 
       */
      directory: Directory.Data,
      /**
       * This is in template literals bc we need not just the folder but also the file name.
       */
      path: `${IMAGE_DIR}/${fileName}`,
      /**
       * we have to convert this data as a string.
       */
      data: base64Data
    })
    console.log('saved:', savedFile)
  }
  
  async readAsBase64(photo: Photo){
    if (this.platform.is('hybrid')) {
      const file = await Filesystem.readFile({
        path: photo.path
      });
      return file.data

    }
    /**
     * Unsure if i need help because This is only going to be used on a hybrid app not in a website.
     * I'll add anyways
     */
    else {
      const response = await fetch(photo.webPath);
      const blob = await response.blob();
      return await this.convertBlobToBase64(blob) as string;
    }
  }
  
  // Helper function
  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader;
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });



  async deleteImage(file: LocalFile) {
    await Filesystem.deleteFile({
      directory: Directory.Data,
      path: file.path
    });
    this.loadFiles();
  }

  imageZoom(file: LocalFile) {
    console.log(file)
    this.photoViewer.show(`${file.path}`)
  }
}
