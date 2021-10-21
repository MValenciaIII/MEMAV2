(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "./node_modules/@turf/bbox/dist/es/index.js":
    /*!**************************************************!*\
      !*** ./node_modules/@turf/bbox/dist/es/index.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesTurfBboxDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _turf_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/meta */
      "./node_modules/@turf/meta/dist/es/index.js");
      /**
       * Takes a set of features, calculates the bbox of all input features, and returns a bounding box.
       *
       * @name bbox
       * @param {GeoJSON} geojson any GeoJSON object
       * @returns {BBox} bbox extent in [minX, minY, maxX, maxY] order
       * @example
       * var line = turf.lineString([[-74, 40], [-78, 42], [-82, 35]]);
       * var bbox = turf.bbox(line);
       * var bboxPolygon = turf.bboxPolygon(bbox);
       *
       * //addToMap
       * var addToMap = [line, bboxPolygon]
       */


      function bbox(geojson) {
        var result = [Infinity, Infinity, -Infinity, -Infinity];
        Object(_turf_meta__WEBPACK_IMPORTED_MODULE_0__["coordEach"])(geojson, function (coord) {
          if (result[0] > coord[0]) {
            result[0] = coord[0];
          }

          if (result[1] > coord[1]) {
            result[1] = coord[1];
          }

          if (result[2] < coord[0]) {
            result[2] = coord[0];
          }

          if (result[3] < coord[1]) {
            result[3] = coord[1];
          }
        });
        return result;
      }

      bbox["default"] = bbox;
      /* harmony default export */

      __webpack_exports__["default"] = bbox;
      /***/
    },

    /***/
    "./node_modules/@turf/boolean-disjoint/dist/es/index.js":
    /*!**************************************************************!*\
      !*** ./node_modules/@turf/boolean-disjoint/dist/es/index.js ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesTurfBooleanDisjointDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/boolean-point-in-polygon */
      "./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js");
      /* harmony import */


      var _turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @turf/line-intersect */
      "./node_modules/@turf/line-intersect/dist/es/index.js");
      /* harmony import */


      var _turf_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @turf/meta */
      "./node_modules/@turf/meta/dist/es/index.js");
      /* harmony import */


      var _turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @turf/polygon-to-line */
      "./node_modules/@turf/polygon-to-line/dist/es/index.js");
      /**
       * Boolean-disjoint returns (TRUE) if the intersection of the two geometries is an empty set.
       *
       * @name booleanDisjoint
       * @param {Geometry|Feature<any>} feature1 GeoJSON Feature or Geometry
       * @param {Geometry|Feature<any>} feature2 GeoJSON Feature or Geometry
       * @returns {boolean} true/false
       * @example
       * var point = turf.point([2, 2]);
       * var line = turf.lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
       *
       * turf.booleanDisjoint(line, point);
       * //=true
       */


      function booleanDisjoint(feature1, feature2) {
        var bool = true;
        Object(_turf_meta__WEBPACK_IMPORTED_MODULE_2__["flattenEach"])(feature1, function (flatten1) {
          Object(_turf_meta__WEBPACK_IMPORTED_MODULE_2__["flattenEach"])(feature2, function (flatten2) {
            if (bool === false) {
              return false;
            }

            bool = disjoint(flatten1.geometry, flatten2.geometry);
          });
        });
        return bool;
      }
      /**
       * Disjoint operation for simple Geometries (Point/LineString/Polygon)
       *
       * @private
       * @param {Geometry<any>} geom1 GeoJSON Geometry
       * @param {Geometry<any>} geom2 GeoJSON Geometry
       * @returns {boolean} true/false
       */


      function disjoint(geom1, geom2) {
        switch (geom1.type) {
          case "Point":
            switch (geom2.type) {
              case "Point":
                return !compareCoords(geom1.coordinates, geom2.coordinates);

              case "LineString":
                return !isPointOnLine(geom2, geom1);

              case "Polygon":
                return !Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(geom1, geom2);
            }
            /* istanbul ignore next */


            break;

          case "LineString":
            switch (geom2.type) {
              case "Point":
                return !isPointOnLine(geom1, geom2);

              case "LineString":
                return !isLineOnLine(geom1, geom2);

              case "Polygon":
                return !isLineInPoly(geom2, geom1);
            }
            /* istanbul ignore next */


            break;

          case "Polygon":
            switch (geom2.type) {
              case "Point":
                return !Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(geom2, geom1);

              case "LineString":
                return !isLineInPoly(geom1, geom2);

              case "Polygon":
                return !isPolyInPoly(geom2, geom1);
            }

        }

        return false;
      } // http://stackoverflow.com/a/11908158/1979085


      function isPointOnLine(lineString, pt) {
        for (var i = 0; i < lineString.coordinates.length - 1; i++) {
          if (isPointOnLineSegment(lineString.coordinates[i], lineString.coordinates[i + 1], pt.coordinates)) {
            return true;
          }
        }

        return false;
      }

      function isLineOnLine(lineString1, lineString2) {
        var doLinesIntersect = Object(_turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__["default"])(lineString1, lineString2);

        if (doLinesIntersect.features.length > 0) {
          return true;
        }

        return false;
      }

      function isLineInPoly(polygon, lineString) {
        for (var _i = 0, _a = lineString.coordinates; _i < _a.length; _i++) {
          var coord = _a[_i];

          if (Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(coord, polygon)) {
            return true;
          }
        }

        var doLinesIntersect = Object(_turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__["default"])(lineString, Object(_turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__["default"])(polygon));

        if (doLinesIntersect.features.length > 0) {
          return true;
        }

        return false;
      }
      /**
       * Is Polygon (geom1) in Polygon (geom2)
       * Only takes into account outer rings
       * See http://stackoverflow.com/a/4833823/1979085
       *
       * @private
       * @param {Geometry|Feature<Polygon>} feature1 Polygon1
       * @param {Geometry|Feature<Polygon>} feature2 Polygon2
       * @returns {boolean} true/false
       */


      function isPolyInPoly(feature1, feature2) {
        for (var _i = 0, _a = feature1.coordinates[0]; _i < _a.length; _i++) {
          var coord1 = _a[_i];

          if (Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(coord1, feature2)) {
            return true;
          }
        }

        for (var _b = 0, _c = feature2.coordinates[0]; _b < _c.length; _b++) {
          var coord2 = _c[_b];

          if (Object(_turf_boolean_point_in_polygon__WEBPACK_IMPORTED_MODULE_0__["default"])(coord2, feature1)) {
            return true;
          }
        }

        var doLinesIntersect = Object(_turf_line_intersect__WEBPACK_IMPORTED_MODULE_1__["default"])(Object(_turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__["default"])(feature1), Object(_turf_polygon_to_line__WEBPACK_IMPORTED_MODULE_3__["default"])(feature2));

        if (doLinesIntersect.features.length > 0) {
          return true;
        }

        return false;
      }

      function isPointOnLineSegment(lineSegmentStart, lineSegmentEnd, pt) {
        var dxc = pt[0] - lineSegmentStart[0];
        var dyc = pt[1] - lineSegmentStart[1];
        var dxl = lineSegmentEnd[0] - lineSegmentStart[0];
        var dyl = lineSegmentEnd[1] - lineSegmentStart[1];
        var cross = dxc * dyl - dyc * dxl;

        if (cross !== 0) {
          return false;
        }

        if (Math.abs(dxl) >= Math.abs(dyl)) {
          if (dxl > 0) {
            return lineSegmentStart[0] <= pt[0] && pt[0] <= lineSegmentEnd[0];
          } else {
            return lineSegmentEnd[0] <= pt[0] && pt[0] <= lineSegmentStart[0];
          }
        } else if (dyl > 0) {
          return lineSegmentStart[1] <= pt[1] && pt[1] <= lineSegmentEnd[1];
        } else {
          return lineSegmentEnd[1] <= pt[1] && pt[1] <= lineSegmentStart[1];
        }
      }
      /**
       * compareCoords
       *
       * @private
       * @param {Position} pair1 point [x,y]
       * @param {Position} pair2 point [x,y]
       * @returns {boolean} true/false if coord pairs match
       */


      function compareCoords(pair1, pair2) {
        return pair1[0] === pair2[0] && pair1[1] === pair2[1];
      }
      /* harmony default export */


      __webpack_exports__["default"] = booleanDisjoint;
      /***/
    },

    /***/
    "./node_modules/@turf/boolean-intersects/dist/es/index.js":
    /*!****************************************************************!*\
      !*** ./node_modules/@turf/boolean-intersects/dist/es/index.js ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesTurfBooleanIntersectsDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return booleanIntersects;
      });
      /* harmony import */


      var _turf_boolean_disjoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/boolean-disjoint */
      "./node_modules/@turf/boolean-disjoint/dist/es/index.js");
      /* harmony import */


      var _turf_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @turf/meta */
      "./node_modules/@turf/meta/dist/es/index.js");
      /**
       * Boolean-intersects returns (TRUE) two geometries intersect.
       *
       * @name booleanIntersects
       * @param {Geometry|Feature<any>} feature1 GeoJSON Feature or Geometry
       * @param {Geometry|Feature<any>} feature2 GeoJSON Feature or Geometry
       * @returns {boolean} true/false
       * @example
       * var point = turf.point([2, 2]);
       * var line = turf.lineString([[1, 1], [1, 2], [1, 3], [1, 4]]);
       *
       * turf.booleanIntersects(line, point);
       * //=true
       */


      function booleanIntersects(feature1, feature2) {
        var bool = false;
        Object(_turf_meta__WEBPACK_IMPORTED_MODULE_1__["flattenEach"])(feature1, function (flatten1) {
          Object(_turf_meta__WEBPACK_IMPORTED_MODULE_1__["flattenEach"])(feature2, function (flatten2) {
            if (bool === true) {
              return true;
            }

            bool = !Object(_turf_boolean_disjoint__WEBPACK_IMPORTED_MODULE_0__["default"])(flatten1.geometry, flatten2.geometry);
          });
        });
        return bool;
      }
      /***/

    },

    /***/
    "./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js":
    /*!**********************************************************************!*\
      !*** ./node_modules/@turf/boolean-point-in-polygon/dist/es/index.js ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesTurfBooleanPointInPolygonDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return booleanPointInPolygon;
      });
      /* harmony import */


      var _turf_invariant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/invariant */
      "./node_modules/@turf/invariant/dist/es/index.js"); // http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule
      // modified from: https://github.com/substack/point-in-polygon/blob/master/index.js
      // which was modified from http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

      /**
       * Takes a {@link Point} and a {@link Polygon} or {@link MultiPolygon} and determines if the point
       * resides inside the polygon. The polygon can be convex or concave. The function accounts for holes.
       *
       * @name booleanPointInPolygon
       * @param {Coord} point input point
       * @param {Feature<Polygon|MultiPolygon>} polygon input polygon or multipolygon
       * @param {Object} [options={}] Optional parameters
       * @param {boolean} [options.ignoreBoundary=false] True if polygon boundary should be ignored when determining if
       * the point is inside the polygon otherwise false.
       * @returns {boolean} `true` if the Point is inside the Polygon; `false` if the Point is not inside the Polygon
       * @example
       * var pt = turf.point([-77, 44]);
       * var poly = turf.polygon([[
       *   [-81, 41],
       *   [-81, 47],
       *   [-72, 47],
       *   [-72, 41],
       *   [-81, 41]
       * ]]);
       *
       * turf.booleanPointInPolygon(pt, poly);
       * //= true
       */


      function booleanPointInPolygon(point, polygon, options) {
        if (options === void 0) {
          options = {};
        } // validation


        if (!point) {
          throw new Error("point is required");
        }

        if (!polygon) {
          throw new Error("polygon is required");
        }

        var pt = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getCoord"])(point);
        var geom = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_0__["getGeom"])(polygon);
        var type = geom.type;
        var bbox = polygon.bbox;
        var polys = geom.coordinates; // Quick elimination if point is not inside bbox

        if (bbox && inBBox(pt, bbox) === false) {
          return false;
        } // normalize to multipolygon


        if (type === "Polygon") {
          polys = [polys];
        }

        var insidePoly = false;

        for (var i = 0; i < polys.length && !insidePoly; i++) {
          // check if it is in the outer ring first
          if (inRing(pt, polys[i][0], options.ignoreBoundary)) {
            var inHole = false;
            var k = 1; // check for the point in any of the holes

            while (k < polys[i].length && !inHole) {
              if (inRing(pt, polys[i][k], !options.ignoreBoundary)) {
                inHole = true;
              }

              k++;
            }

            if (!inHole) {
              insidePoly = true;
            }
          }
        }

        return insidePoly;
      }
      /**
       * inRing
       *
       * @private
       * @param {Array<number>} pt [x,y]
       * @param {Array<Array<number>>} ring [[x,y], [x,y],..]
       * @param {boolean} ignoreBoundary ignoreBoundary
       * @returns {boolean} inRing
       */


      function inRing(pt, ring, ignoreBoundary) {
        var isInside = false;

        if (ring[0][0] === ring[ring.length - 1][0] && ring[0][1] === ring[ring.length - 1][1]) {
          ring = ring.slice(0, ring.length - 1);
        }

        for (var i = 0, j = ring.length - 1; i < ring.length; j = i++) {
          var xi = ring[i][0];
          var yi = ring[i][1];
          var xj = ring[j][0];
          var yj = ring[j][1];
          var onBoundary = pt[1] * (xi - xj) + yi * (xj - pt[0]) + yj * (pt[0] - xi) === 0 && (xi - pt[0]) * (xj - pt[0]) <= 0 && (yi - pt[1]) * (yj - pt[1]) <= 0;

          if (onBoundary) {
            return !ignoreBoundary;
          }

          var intersect = yi > pt[1] !== yj > pt[1] && pt[0] < (xj - xi) * (pt[1] - yi) / (yj - yi) + xi;

          if (intersect) {
            isInside = !isInside;
          }
        }

        return isInside;
      }
      /**
       * inBBox
       *
       * @private
       * @param {Position} pt point [x,y]
       * @param {BBox} bbox BBox [west, south, east, north]
       * @returns {boolean} true/false if point is inside BBox
       */


      function inBBox(pt, bbox) {
        return bbox[0] <= pt[0] && bbox[1] <= pt[1] && bbox[2] >= pt[0] && bbox[3] >= pt[1];
      }
      /***/

    },

    /***/
    "./node_modules/@turf/helpers/dist/es/index.js":
    /*!*****************************************************!*\
      !*** ./node_modules/@turf/helpers/dist/es/index.js ***!
      \*****************************************************/

    /*! exports provided: earthRadius, factors, unitsFactors, areaFactors, feature, geometry, point, points, polygon, polygons, lineString, lineStrings, featureCollection, multiLineString, multiPoint, multiPolygon, geometryCollection, round, radiansToLength, lengthToRadians, lengthToDegrees, bearingToAzimuth, radiansToDegrees, degreesToRadians, convertLength, convertArea, isNumber, isObject, validateBBox, validateId */

    /***/
    function node_modulesTurfHelpersDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "earthRadius", function () {
        return earthRadius;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "factors", function () {
        return factors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "unitsFactors", function () {
        return unitsFactors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "areaFactors", function () {
        return areaFactors;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "feature", function () {
        return feature;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geometry", function () {
        return geometry;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "point", function () {
        return point;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "points", function () {
        return points;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polygon", function () {
        return polygon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polygons", function () {
        return polygons;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineString", function () {
        return lineString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineStrings", function () {
        return lineStrings;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureCollection", function () {
        return featureCollection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "multiLineString", function () {
        return multiLineString;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "multiPoint", function () {
        return multiPoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "multiPolygon", function () {
        return multiPolygon;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geometryCollection", function () {
        return geometryCollection;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "round", function () {
        return round;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "radiansToLength", function () {
        return radiansToLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lengthToRadians", function () {
        return lengthToRadians;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lengthToDegrees", function () {
        return lengthToDegrees;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "bearingToAzimuth", function () {
        return bearingToAzimuth;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "radiansToDegrees", function () {
        return radiansToDegrees;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "degreesToRadians", function () {
        return degreesToRadians;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertLength", function () {
        return convertLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "convertArea", function () {
        return convertArea;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isNumber", function () {
        return isNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "isObject", function () {
        return isObject;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateBBox", function () {
        return validateBBox;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "validateId", function () {
        return validateId;
      });
      /**
       * @module helpers
       */

      /**
       * Earth Radius used with the Harvesine formula and approximates using a spherical (non-ellipsoid) Earth.
       *
       * @memberof helpers
       * @type {number}
       */


      var earthRadius = 6371008.8;
      /**
       * Unit of measurement factors using a spherical (non-ellipsoid) earth radius.
       *
       * @memberof helpers
       * @type {Object}
       */

      var factors = {
        centimeters: earthRadius * 100,
        centimetres: earthRadius * 100,
        degrees: earthRadius / 111325,
        feet: earthRadius * 3.28084,
        inches: earthRadius * 39.37,
        kilometers: earthRadius / 1000,
        kilometres: earthRadius / 1000,
        meters: earthRadius,
        metres: earthRadius,
        miles: earthRadius / 1609.344,
        millimeters: earthRadius * 1000,
        millimetres: earthRadius * 1000,
        nauticalmiles: earthRadius / 1852,
        radians: 1,
        yards: earthRadius * 1.0936
      };
      /**
       * Units of measurement factors based on 1 meter.
       *
       * @memberof helpers
       * @type {Object}
       */

      var unitsFactors = {
        centimeters: 100,
        centimetres: 100,
        degrees: 1 / 111325,
        feet: 3.28084,
        inches: 39.37,
        kilometers: 1 / 1000,
        kilometres: 1 / 1000,
        meters: 1,
        metres: 1,
        miles: 1 / 1609.344,
        millimeters: 1000,
        millimetres: 1000,
        nauticalmiles: 1 / 1852,
        radians: 1 / earthRadius,
        yards: 1.0936133
      };
      /**
       * Area of measurement factors based on 1 square meter.
       *
       * @memberof helpers
       * @type {Object}
       */

      var areaFactors = {
        acres: 0.000247105,
        centimeters: 10000,
        centimetres: 10000,
        feet: 10.763910417,
        hectares: 0.0001,
        inches: 1550.003100006,
        kilometers: 0.000001,
        kilometres: 0.000001,
        meters: 1,
        metres: 1,
        miles: 3.86e-7,
        millimeters: 1000000,
        millimetres: 1000000,
        yards: 1.195990046
      };
      /**
       * Wraps a GeoJSON {@link Geometry} in a GeoJSON {@link Feature}.
       *
       * @name feature
       * @param {Geometry} geometry input geometry
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature} a GeoJSON Feature
       * @example
       * var geometry = {
       *   "type": "Point",
       *   "coordinates": [110, 50]
       * };
       *
       * var feature = turf.feature(geometry);
       *
       * //=feature
       */

      function feature(geom, properties, options) {
        if (options === void 0) {
          options = {};
        }

        var feat = {
          type: "Feature"
        };

        if (options.id === 0 || options.id) {
          feat.id = options.id;
        }

        if (options.bbox) {
          feat.bbox = options.bbox;
        }

        feat.properties = properties || {};
        feat.geometry = geom;
        return feat;
      }
      /**
       * Creates a GeoJSON {@link Geometry} from a Geometry string type & coordinates.
       * For GeometryCollection type use `helpers.geometryCollection`
       *
       * @name geometry
       * @param {string} type Geometry Type
       * @param {Array<any>} coordinates Coordinates
       * @param {Object} [options={}] Optional Parameters
       * @returns {Geometry} a GeoJSON Geometry
       * @example
       * var type = "Point";
       * var coordinates = [110, 50];
       * var geometry = turf.geometry(type, coordinates);
       * // => geometry
       */


      function geometry(type, coordinates, _options) {
        if (_options === void 0) {
          _options = {};
        }

        switch (type) {
          case "Point":
            return point(coordinates).geometry;

          case "LineString":
            return lineString(coordinates).geometry;

          case "Polygon":
            return polygon(coordinates).geometry;

          case "MultiPoint":
            return multiPoint(coordinates).geometry;

          case "MultiLineString":
            return multiLineString(coordinates).geometry;

          case "MultiPolygon":
            return multiPolygon(coordinates).geometry;

          default:
            throw new Error(type + " is invalid");
        }
      }
      /**
       * Creates a {@link Point} {@link Feature} from a Position.
       *
       * @name point
       * @param {Array<number>} coordinates longitude, latitude position (each in decimal degrees)
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<Point>} a Point feature
       * @example
       * var point = turf.point([-75.343, 39.984]);
       *
       * //=point
       */


      function point(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        if (!coordinates) {
          throw new Error("coordinates is required");
        }

        if (!Array.isArray(coordinates)) {
          throw new Error("coordinates must be an Array");
        }

        if (coordinates.length < 2) {
          throw new Error("coordinates must be at least 2 numbers long");
        }

        if (!isNumber(coordinates[0]) || !isNumber(coordinates[1])) {
          throw new Error("coordinates must contain numbers");
        }

        var geom = {
          type: "Point",
          coordinates: coordinates
        };
        return feature(geom, properties, options);
      }
      /**
       * Creates a {@link Point} {@link FeatureCollection} from an Array of Point coordinates.
       *
       * @name points
       * @param {Array<Array<number>>} coordinates an array of Points
       * @param {Object} [properties={}] Translate these properties to each Feature
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
       * associated with the FeatureCollection
       * @param {string|number} [options.id] Identifier associated with the FeatureCollection
       * @returns {FeatureCollection<Point>} Point Feature
       * @example
       * var points = turf.points([
       *   [-75, 39],
       *   [-80, 45],
       *   [-78, 50]
       * ]);
       *
       * //=points
       */


      function points(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        return featureCollection(coordinates.map(function (coords) {
          return point(coords, properties);
        }), options);
      }
      /**
       * Creates a {@link Polygon} {@link Feature} from an Array of LinearRings.
       *
       * @name polygon
       * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<Polygon>} Polygon Feature
       * @example
       * var polygon = turf.polygon([[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]], { name: 'poly1' });
       *
       * //=polygon
       */


      function polygon(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        for (var _i = 0, coordinates_1 = coordinates; _i < coordinates_1.length; _i++) {
          var ring = coordinates_1[_i];

          if (ring.length < 4) {
            throw new Error("Each LinearRing of a Polygon must have 4 or more Positions.");
          }

          for (var j = 0; j < ring[ring.length - 1].length; j++) {
            // Check if first point of Polygon contains two numbers
            if (ring[ring.length - 1][j] !== ring[0][j]) {
              throw new Error("First and last Position are not equivalent.");
            }
          }
        }

        var geom = {
          type: "Polygon",
          coordinates: coordinates
        };
        return feature(geom, properties, options);
      }
      /**
       * Creates a {@link Polygon} {@link FeatureCollection} from an Array of Polygon coordinates.
       *
       * @name polygons
       * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygon coordinates
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the FeatureCollection
       * @returns {FeatureCollection<Polygon>} Polygon FeatureCollection
       * @example
       * var polygons = turf.polygons([
       *   [[[-5, 52], [-4, 56], [-2, 51], [-7, 54], [-5, 52]]],
       *   [[[-15, 42], [-14, 46], [-12, 41], [-17, 44], [-15, 42]]],
       * ]);
       *
       * //=polygons
       */


      function polygons(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        return featureCollection(coordinates.map(function (coords) {
          return polygon(coords, properties);
        }), options);
      }
      /**
       * Creates a {@link LineString} {@link Feature} from an Array of Positions.
       *
       * @name lineString
       * @param {Array<Array<number>>} coordinates an array of Positions
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<LineString>} LineString Feature
       * @example
       * var linestring1 = turf.lineString([[-24, 63], [-23, 60], [-25, 65], [-20, 69]], {name: 'line 1'});
       * var linestring2 = turf.lineString([[-14, 43], [-13, 40], [-15, 45], [-10, 49]], {name: 'line 2'});
       *
       * //=linestring1
       * //=linestring2
       */


      function lineString(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        if (coordinates.length < 2) {
          throw new Error("coordinates must be an array of two or more positions");
        }

        var geom = {
          type: "LineString",
          coordinates: coordinates
        };
        return feature(geom, properties, options);
      }
      /**
       * Creates a {@link LineString} {@link FeatureCollection} from an Array of LineString coordinates.
       *
       * @name lineStrings
       * @param {Array<Array<Array<number>>>} coordinates an array of LinearRings
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north]
       * associated with the FeatureCollection
       * @param {string|number} [options.id] Identifier associated with the FeatureCollection
       * @returns {FeatureCollection<LineString>} LineString FeatureCollection
       * @example
       * var linestrings = turf.lineStrings([
       *   [[-24, 63], [-23, 60], [-25, 65], [-20, 69]],
       *   [[-14, 43], [-13, 40], [-15, 45], [-10, 49]]
       * ]);
       *
       * //=linestrings
       */


      function lineStrings(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        return featureCollection(coordinates.map(function (coords) {
          return lineString(coords, properties);
        }), options);
      }
      /**
       * Takes one or more {@link Feature|Features} and creates a {@link FeatureCollection}.
       *
       * @name featureCollection
       * @param {Feature[]} features input features
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {FeatureCollection} FeatureCollection of Features
       * @example
       * var locationA = turf.point([-75.343, 39.984], {name: 'Location A'});
       * var locationB = turf.point([-75.833, 39.284], {name: 'Location B'});
       * var locationC = turf.point([-75.534, 39.123], {name: 'Location C'});
       *
       * var collection = turf.featureCollection([
       *   locationA,
       *   locationB,
       *   locationC
       * ]);
       *
       * //=collection
       */


      function featureCollection(features, options) {
        if (options === void 0) {
          options = {};
        }

        var fc = {
          type: "FeatureCollection"
        };

        if (options.id) {
          fc.id = options.id;
        }

        if (options.bbox) {
          fc.bbox = options.bbox;
        }

        fc.features = features;
        return fc;
      }
      /**
       * Creates a {@link Feature<MultiLineString>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name multiLineString
       * @param {Array<Array<Array<number>>>} coordinates an array of LineStrings
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<MultiLineString>} a MultiLineString feature
       * @throws {Error} if no coordinates are passed
       * @example
       * var multiLine = turf.multiLineString([[[0,0],[10,10]]]);
       *
       * //=multiLine
       */


      function multiLineString(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        var geom = {
          type: "MultiLineString",
          coordinates: coordinates
        };
        return feature(geom, properties, options);
      }
      /**
       * Creates a {@link Feature<MultiPoint>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name multiPoint
       * @param {Array<Array<number>>} coordinates an array of Positions
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<MultiPoint>} a MultiPoint feature
       * @throws {Error} if no coordinates are passed
       * @example
       * var multiPt = turf.multiPoint([[0,0],[10,10]]);
       *
       * //=multiPt
       */


      function multiPoint(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        var geom = {
          type: "MultiPoint",
          coordinates: coordinates
        };
        return feature(geom, properties, options);
      }
      /**
       * Creates a {@link Feature<MultiPolygon>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name multiPolygon
       * @param {Array<Array<Array<Array<number>>>>} coordinates an array of Polygons
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<MultiPolygon>} a multipolygon feature
       * @throws {Error} if no coordinates are passed
       * @example
       * var multiPoly = turf.multiPolygon([[[[0,0],[0,10],[10,10],[10,0],[0,0]]]]);
       *
       * //=multiPoly
       *
       */


      function multiPolygon(coordinates, properties, options) {
        if (options === void 0) {
          options = {};
        }

        var geom = {
          type: "MultiPolygon",
          coordinates: coordinates
        };
        return feature(geom, properties, options);
      }
      /**
       * Creates a {@link Feature<GeometryCollection>} based on a
       * coordinate array. Properties can be added optionally.
       *
       * @name geometryCollection
       * @param {Array<Geometry>} geometries an array of GeoJSON Geometries
       * @param {Object} [properties={}] an Object of key-value pairs to add as properties
       * @param {Object} [options={}] Optional Parameters
       * @param {Array<number>} [options.bbox] Bounding Box Array [west, south, east, north] associated with the Feature
       * @param {string|number} [options.id] Identifier associated with the Feature
       * @returns {Feature<GeometryCollection>} a GeoJSON GeometryCollection Feature
       * @example
       * var pt = turf.geometry("Point", [100, 0]);
       * var line = turf.geometry("LineString", [[101, 0], [102, 1]]);
       * var collection = turf.geometryCollection([pt, line]);
       *
       * // => collection
       */


      function geometryCollection(geometries, properties, options) {
        if (options === void 0) {
          options = {};
        }

        var geom = {
          type: "GeometryCollection",
          geometries: geometries
        };
        return feature(geom, properties, options);
      }
      /**
       * Round number to precision
       *
       * @param {number} num Number
       * @param {number} [precision=0] Precision
       * @returns {number} rounded number
       * @example
       * turf.round(120.4321)
       * //=120
       *
       * turf.round(120.4321, 2)
       * //=120.43
       */


      function round(num, precision) {
        if (precision === void 0) {
          precision = 0;
        }

        if (precision && !(precision >= 0)) {
          throw new Error("precision must be a positive number");
        }

        var multiplier = Math.pow(10, precision || 0);
        return Math.round(num * multiplier) / multiplier;
      }
      /**
       * Convert a distance measurement (assuming a spherical Earth) from radians to a more friendly unit.
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
       *
       * @name radiansToLength
       * @param {number} radians in radians across the sphere
       * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
       * meters, kilometres, kilometers.
       * @returns {number} distance
       */


      function radiansToLength(radians, units) {
        if (units === void 0) {
          units = "kilometers";
        }

        var factor = factors[units];

        if (!factor) {
          throw new Error(units + " units is invalid");
        }

        return radians * factor;
      }
      /**
       * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into radians
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
       *
       * @name lengthToRadians
       * @param {number} distance in real units
       * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
       * meters, kilometres, kilometers.
       * @returns {number} radians
       */


      function lengthToRadians(distance, units) {
        if (units === void 0) {
          units = "kilometers";
        }

        var factor = factors[units];

        if (!factor) {
          throw new Error(units + " units is invalid");
        }

        return distance / factor;
      }
      /**
       * Convert a distance measurement (assuming a spherical Earth) from a real-world unit into degrees
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, centimeters, kilometres, feet
       *
       * @name lengthToDegrees
       * @param {number} distance in real units
       * @param {string} [units="kilometers"] can be degrees, radians, miles, inches, yards, metres,
       * meters, kilometres, kilometers.
       * @returns {number} degrees
       */


      function lengthToDegrees(distance, units) {
        return radiansToDegrees(lengthToRadians(distance, units));
      }
      /**
       * Converts any bearing angle from the north line direction (positive clockwise)
       * and returns an angle between 0-360 degrees (positive clockwise), 0 being the north line
       *
       * @name bearingToAzimuth
       * @param {number} bearing angle, between -180 and +180 degrees
       * @returns {number} angle between 0 and 360 degrees
       */


      function bearingToAzimuth(bearing) {
        var angle = bearing % 360;

        if (angle < 0) {
          angle += 360;
        }

        return angle;
      }
      /**
       * Converts an angle in radians to degrees
       *
       * @name radiansToDegrees
       * @param {number} radians angle in radians
       * @returns {number} degrees between 0 and 360 degrees
       */


      function radiansToDegrees(radians) {
        var degrees = radians % (2 * Math.PI);
        return degrees * 180 / Math.PI;
      }
      /**
       * Converts an angle in degrees to radians
       *
       * @name degreesToRadians
       * @param {number} degrees angle between 0 and 360 degrees
       * @returns {number} angle in radians
       */


      function degreesToRadians(degrees) {
        var radians = degrees % 360;
        return radians * Math.PI / 180;
      }
      /**
       * Converts a length to the requested unit.
       * Valid units: miles, nauticalmiles, inches, yards, meters, metres, kilometers, centimeters, feet
       *
       * @param {number} length to be converted
       * @param {Units} [originalUnit="kilometers"] of the length
       * @param {Units} [finalUnit="kilometers"] returned unit
       * @returns {number} the converted length
       */


      function convertLength(length, originalUnit, finalUnit) {
        if (originalUnit === void 0) {
          originalUnit = "kilometers";
        }

        if (finalUnit === void 0) {
          finalUnit = "kilometers";
        }

        if (!(length >= 0)) {
          throw new Error("length must be a positive number");
        }

        return radiansToLength(lengthToRadians(length, originalUnit), finalUnit);
      }
      /**
       * Converts a area to the requested unit.
       * Valid units: kilometers, kilometres, meters, metres, centimetres, millimeters, acres, miles, yards, feet, inches, hectares
       * @param {number} area to be converted
       * @param {Units} [originalUnit="meters"] of the distance
       * @param {Units} [finalUnit="kilometers"] returned unit
       * @returns {number} the converted area
       */


      function convertArea(area, originalUnit, finalUnit) {
        if (originalUnit === void 0) {
          originalUnit = "meters";
        }

        if (finalUnit === void 0) {
          finalUnit = "kilometers";
        }

        if (!(area >= 0)) {
          throw new Error("area must be a positive number");
        }

        var startFactor = areaFactors[originalUnit];

        if (!startFactor) {
          throw new Error("invalid original units");
        }

        var finalFactor = areaFactors[finalUnit];

        if (!finalFactor) {
          throw new Error("invalid final units");
        }

        return area / startFactor * finalFactor;
      }
      /**
       * isNumber
       *
       * @param {*} num Number to validate
       * @returns {boolean} true/false
       * @example
       * turf.isNumber(123)
       * //=true
       * turf.isNumber('foo')
       * //=false
       */


      function isNumber(num) {
        return !isNaN(num) && num !== null && !Array.isArray(num);
      }
      /**
       * isObject
       *
       * @param {*} input variable to validate
       * @returns {boolean} true/false
       * @example
       * turf.isObject({elevation: 10})
       * //=true
       * turf.isObject('foo')
       * //=false
       */


      function isObject(input) {
        return !!input && input.constructor === Object;
      }
      /**
       * Validate BBox
       *
       * @private
       * @param {Array<number>} bbox BBox to validate
       * @returns {void}
       * @throws Error if BBox is not valid
       * @example
       * validateBBox([-180, -40, 110, 50])
       * //=OK
       * validateBBox([-180, -40])
       * //=Error
       * validateBBox('Foo')
       * //=Error
       * validateBBox(5)
       * //=Error
       * validateBBox(null)
       * //=Error
       * validateBBox(undefined)
       * //=Error
       */


      function validateBBox(bbox) {
        if (!bbox) {
          throw new Error("bbox is required");
        }

        if (!Array.isArray(bbox)) {
          throw new Error("bbox must be an Array");
        }

        if (bbox.length !== 4 && bbox.length !== 6) {
          throw new Error("bbox must be an Array of 4 or 6 numbers");
        }

        bbox.forEach(function (num) {
          if (!isNumber(num)) {
            throw new Error("bbox must only contain numbers");
          }
        });
      }
      /**
       * Validate Id
       *
       * @private
       * @param {string|number} id Id to validate
       * @returns {void}
       * @throws Error if Id is not valid
       * @example
       * validateId([-180, -40, 110, 50])
       * //=Error
       * validateId([-180, -40])
       * //=Error
       * validateId('Foo')
       * //=OK
       * validateId(5)
       * //=OK
       * validateId(null)
       * //=Error
       * validateId(undefined)
       * //=Error
       */


      function validateId(id) {
        if (!id) {
          throw new Error("id is required");
        }

        if (["string", "number"].indexOf(typeof id) === -1) {
          throw new Error("id must be a number or a string");
        }
      }
      /***/

    },

    /***/
    "./node_modules/@turf/invariant/dist/es/index.js":
    /*!*******************************************************!*\
      !*** ./node_modules/@turf/invariant/dist/es/index.js ***!
      \*******************************************************/

    /*! exports provided: getCoord, getCoords, containsNumber, geojsonType, featureOf, collectionOf, getGeom, getType */

    /***/
    function node_modulesTurfInvariantDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCoord", function () {
        return getCoord;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getCoords", function () {
        return getCoords;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "containsNumber", function () {
        return containsNumber;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geojsonType", function () {
        return geojsonType;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureOf", function () {
        return featureOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "collectionOf", function () {
        return collectionOf;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getGeom", function () {
        return getGeom;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "getType", function () {
        return getType;
      });
      /* harmony import */


      var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/helpers */
      "./node_modules/@turf/helpers/dist/es/index.js");
      /**
       * Unwrap a coordinate from a Point Feature, Geometry or a single coordinate.
       *
       * @name getCoord
       * @param {Array<number>|Geometry<Point>|Feature<Point>} coord GeoJSON Point or an Array of numbers
       * @returns {Array<number>} coordinates
       * @example
       * var pt = turf.point([10, 10]);
       *
       * var coord = turf.getCoord(pt);
       * //= [10, 10]
       */


      function getCoord(coord) {
        if (!coord) {
          throw new Error("coord is required");
        }

        if (!Array.isArray(coord)) {
          if (coord.type === "Feature" && coord.geometry !== null && coord.geometry.type === "Point") {
            return coord.geometry.coordinates;
          }

          if (coord.type === "Point") {
            return coord.coordinates;
          }
        }

        if (Array.isArray(coord) && coord.length >= 2 && !Array.isArray(coord[0]) && !Array.isArray(coord[1])) {
          return coord;
        }

        throw new Error("coord must be GeoJSON Point or an Array of numbers");
      }
      /**
       * Unwrap coordinates from a Feature, Geometry Object or an Array
       *
       * @name getCoords
       * @param {Array<any>|Geometry|Feature} coords Feature, Geometry Object or an Array
       * @returns {Array<any>} coordinates
       * @example
       * var poly = turf.polygon([[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]);
       *
       * var coords = turf.getCoords(poly);
       * //= [[[119.32, -8.7], [119.55, -8.69], [119.51, -8.54], [119.32, -8.7]]]
       */


      function getCoords(coords) {
        if (Array.isArray(coords)) {
          return coords;
        } // Feature


        if (coords.type === "Feature") {
          if (coords.geometry !== null) {
            return coords.geometry.coordinates;
          }
        } else {
          // Geometry
          if (coords.coordinates) {
            return coords.coordinates;
          }
        }

        throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array");
      }
      /**
       * Checks if coordinates contains a number
       *
       * @name containsNumber
       * @param {Array<any>} coordinates GeoJSON Coordinates
       * @returns {boolean} true if Array contains a number
       */


      function containsNumber(coordinates) {
        if (coordinates.length > 1 && Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(coordinates[0]) && Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isNumber"])(coordinates[1])) {
          return true;
        }

        if (Array.isArray(coordinates[0]) && coordinates[0].length) {
          return containsNumber(coordinates[0]);
        }

        throw new Error("coordinates must only contain numbers");
      }
      /**
       * Enforce expectations about types of GeoJSON objects for Turf.
       *
       * @name geojsonType
       * @param {GeoJSON} value any GeoJSON object
       * @param {string} type expected GeoJSON type
       * @param {string} name name of calling function
       * @throws {Error} if value is not the expected type.
       */


      function geojsonType(value, type, name) {
        if (!type || !name) {
          throw new Error("type and name required");
        }

        if (!value || value.type !== type) {
          throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + value.type);
        }
      }
      /**
       * Enforce expectations about types of {@link Feature} inputs for Turf.
       * Internally this uses {@link geojsonType} to judge geometry types.
       *
       * @name featureOf
       * @param {Feature} feature a feature with an expected geometry type
       * @param {string} type expected GeoJSON type
       * @param {string} name name of calling function
       * @throws {Error} error if value is not the expected type.
       */


      function featureOf(feature, type, name) {
        if (!feature) {
          throw new Error("No feature passed");
        }

        if (!name) {
          throw new Error(".featureOf() requires a name");
        }

        if (!feature || feature.type !== "Feature" || !feature.geometry) {
          throw new Error("Invalid input to " + name + ", Feature with geometry required");
        }

        if (!feature.geometry || feature.geometry.type !== type) {
          throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
        }
      }
      /**
       * Enforce expectations about types of {@link FeatureCollection} inputs for Turf.
       * Internally this uses {@link geojsonType} to judge geometry types.
       *
       * @name collectionOf
       * @param {FeatureCollection} featureCollection a FeatureCollection for which features will be judged
       * @param {string} type expected GeoJSON type
       * @param {string} name name of calling function
       * @throws {Error} if value is not the expected type.
       */


      function collectionOf(featureCollection, type, name) {
        if (!featureCollection) {
          throw new Error("No featureCollection passed");
        }

        if (!name) {
          throw new Error(".collectionOf() requires a name");
        }

        if (!featureCollection || featureCollection.type !== "FeatureCollection") {
          throw new Error("Invalid input to " + name + ", FeatureCollection required");
        }

        for (var _i = 0, _a = featureCollection.features; _i < _a.length; _i++) {
          var feature = _a[_i];

          if (!feature || feature.type !== "Feature" || !feature.geometry) {
            throw new Error("Invalid input to " + name + ", Feature with geometry required");
          }

          if (!feature.geometry || feature.geometry.type !== type) {
            throw new Error("Invalid input to " + name + ": must be a " + type + ", given " + feature.geometry.type);
          }
        }
      }
      /**
       * Get Geometry from Feature or Geometry Object
       *
       * @param {Feature|Geometry} geojson GeoJSON Feature or Geometry Object
       * @returns {Geometry|null} GeoJSON Geometry Object
       * @throws {Error} if geojson is not a Feature or Geometry Object
       * @example
       * var point = {
       *   "type": "Feature",
       *   "properties": {},
       *   "geometry": {
       *     "type": "Point",
       *     "coordinates": [110, 40]
       *   }
       * }
       * var geom = turf.getGeom(point)
       * //={"type": "Point", "coordinates": [110, 40]}
       */


      function getGeom(geojson) {
        if (geojson.type === "Feature") {
          return geojson.geometry;
        }

        return geojson;
      }
      /**
       * Get GeoJSON object's type, Geometry type is prioritize.
       *
       * @param {GeoJSON} geojson GeoJSON object
       * @param {string} [name="geojson"] name of the variable to display in error message (unused)
       * @returns {string} GeoJSON type
       * @example
       * var point = {
       *   "type": "Feature",
       *   "properties": {},
       *   "geometry": {
       *     "type": "Point",
       *     "coordinates": [110, 40]
       *   }
       * }
       * var geom = turf.getType(point)
       * //="Point"
       */


      function getType(geojson, _name) {
        if (geojson.type === "FeatureCollection") {
          return "FeatureCollection";
        }

        if (geojson.type === "GeometryCollection") {
          return "GeometryCollection";
        }

        if (geojson.type === "Feature" && geojson.geometry !== null) {
          return geojson.geometry.type;
        }

        return geojson.type;
      }
      /***/

    },

    /***/
    "./node_modules/@turf/line-intersect/dist/es/index.js":
    /*!************************************************************!*\
      !*** ./node_modules/@turf/line-intersect/dist/es/index.js ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesTurfLineIntersectDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/helpers */
      "./node_modules/@turf/helpers/dist/es/index.js");
      /* harmony import */


      var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @turf/invariant */
      "./node_modules/@turf/invariant/dist/es/index.js");
      /* harmony import */


      var _turf_line_segment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @turf/line-segment */
      "./node_modules/@turf/line-segment/dist/es/index.js");
      /* harmony import */


      var _turf_meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @turf/meta */
      "./node_modules/@turf/meta/dist/es/index.js");
      /* harmony import */


      var geojson_rbush__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! geojson-rbush */
      "./node_modules/geojson-rbush/index.js");
      /* harmony import */


      var geojson_rbush__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(geojson_rbush__WEBPACK_IMPORTED_MODULE_4__);
      /**
       * Takes any LineString or Polygon GeoJSON and returns the intersecting point(s).
       *
       * @name lineIntersect
       * @param {GeoJSON} line1 any LineString or Polygon
       * @param {GeoJSON} line2 any LineString or Polygon
       * @returns {FeatureCollection<Point>} point(s) that intersect both
       * @example
       * var line1 = turf.lineString([[126, -11], [129, -21]]);
       * var line2 = turf.lineString([[123, -18], [131, -14]]);
       * var intersects = turf.lineIntersect(line1, line2);
       *
       * //addToMap
       * var addToMap = [line1, line2, intersects]
       */


      function lineIntersect(line1, line2) {
        var unique = {};
        var results = []; // First, normalize geometries to features
        // Then, handle simple 2-vertex segments

        if (line1.type === "LineString") {
          line1 = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(line1);
        }

        if (line2.type === "LineString") {
          line2 = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(line2);
        }

        if (line1.type === "Feature" && line2.type === "Feature" && line1.geometry !== null && line2.geometry !== null && line1.geometry.type === "LineString" && line2.geometry.type === "LineString" && line1.geometry.coordinates.length === 2 && line2.geometry.coordinates.length === 2) {
          var intersect = intersects(line1, line2);

          if (intersect) {
            results.push(intersect);
          }

          return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["featureCollection"])(results);
        } // Handles complex GeoJSON Geometries


        var tree = geojson_rbush__WEBPACK_IMPORTED_MODULE_4___default()();
        tree.load(Object(_turf_line_segment__WEBPACK_IMPORTED_MODULE_2__["default"])(line2));
        Object(_turf_meta__WEBPACK_IMPORTED_MODULE_3__["featureEach"])(Object(_turf_line_segment__WEBPACK_IMPORTED_MODULE_2__["default"])(line1), function (segment) {
          Object(_turf_meta__WEBPACK_IMPORTED_MODULE_3__["featureEach"])(tree.search(segment), function (match) {
            var intersect = intersects(segment, match);

            if (intersect) {
              // prevent duplicate points https://github.com/Turfjs/turf/issues/688
              var key = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(intersect).join(",");

              if (!unique[key]) {
                unique[key] = true;
                results.push(intersect);
              }
            }
          });
        });
        return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["featureCollection"])(results);
      }
      /**
       * Find a point that intersects LineStrings with two coordinates each
       *
       * @private
       * @param {Feature<LineString>} line1 GeoJSON LineString (Must only contain 2 coordinates)
       * @param {Feature<LineString>} line2 GeoJSON LineString (Must only contain 2 coordinates)
       * @returns {Feature<Point>} intersecting GeoJSON Point
       */


      function intersects(line1, line2) {
        var coords1 = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(line1);
        var coords2 = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(line2);

        if (coords1.length !== 2) {
          throw new Error("<intersects> line1 must only contain 2 coordinates");
        }

        if (coords2.length !== 2) {
          throw new Error("<intersects> line2 must only contain 2 coordinates");
        }

        var x1 = coords1[0][0];
        var y1 = coords1[0][1];
        var x2 = coords1[1][0];
        var y2 = coords1[1][1];
        var x3 = coords2[0][0];
        var y3 = coords2[0][1];
        var x4 = coords2[1][0];
        var y4 = coords2[1][1];
        var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
        var numeA = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
        var numeB = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);

        if (denom === 0) {
          if (numeA === 0 && numeB === 0) {
            return null;
          }

          return null;
        }

        var uA = numeA / denom;
        var uB = numeB / denom;

        if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
          var x = x1 + uA * (x2 - x1);
          var y = y1 + uA * (y2 - y1);
          return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])([x, y]);
        }

        return null;
      }
      /* harmony default export */


      __webpack_exports__["default"] = lineIntersect;
      /***/
    },

    /***/
    "./node_modules/@turf/line-segment/dist/es/index.js":
    /*!**********************************************************!*\
      !*** ./node_modules/@turf/line-segment/dist/es/index.js ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesTurfLineSegmentDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/helpers */
      "./node_modules/@turf/helpers/dist/es/index.js");
      /* harmony import */


      var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @turf/invariant */
      "./node_modules/@turf/invariant/dist/es/index.js");
      /* harmony import */


      var _turf_meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @turf/meta */
      "./node_modules/@turf/meta/dist/es/index.js");
      /**
       * Creates a {@link FeatureCollection} of 2-vertex {@link LineString} segments from a
       * {@link LineString|(Multi)LineString} or {@link Polygon|(Multi)Polygon}.
       *
       * @name lineSegment
       * @param {GeoJSON} geojson GeoJSON Polygon or LineString
       * @returns {FeatureCollection<LineString>} 2-vertex line segments
       * @example
       * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
       * var segments = turf.lineSegment(polygon);
       *
       * //addToMap
       * var addToMap = [polygon, segments]
       */


      function lineSegment(geojson) {
        if (!geojson) {
          throw new Error("geojson is required");
        }

        var results = [];
        Object(_turf_meta__WEBPACK_IMPORTED_MODULE_2__["flattenEach"])(geojson, function (feature) {
          lineSegmentFeature(feature, results);
        });
        return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["featureCollection"])(results);
      }
      /**
       * Line Segment
       *
       * @private
       * @param {Feature<LineString|Polygon>} geojson Line or polygon feature
       * @param {Array} results push to results
       * @returns {void}
       */


      function lineSegmentFeature(geojson, results) {
        var coords = [];
        var geometry = geojson.geometry;

        if (geometry !== null) {
          switch (geometry.type) {
            case "Polygon":
              coords = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(geometry);
              break;

            case "LineString":
              coords = [Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getCoords"])(geometry)];
          }

          coords.forEach(function (coord) {
            var segments = createSegments(coord, geojson.properties);
            segments.forEach(function (segment) {
              segment.id = results.length;
              results.push(segment);
            });
          });
        }
      }
      /**
       * Create Segments from LineString coordinates
       *
       * @private
       * @param {Array<Array<number>>} coords LineString coordinates
       * @param {*} properties GeoJSON properties
       * @returns {Array<Feature<LineString>>} line segments
       */


      function createSegments(coords, properties) {
        var segments = [];
        coords.reduce(function (previousCoords, currentCoords) {
          var segment = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])([previousCoords, currentCoords], properties);
          segment.bbox = bbox(previousCoords, currentCoords);
          segments.push(segment);
          return currentCoords;
        });
        return segments;
      }
      /**
       * Create BBox between two coordinates (faster than @turf/bbox)
       *
       * @private
       * @param {Array<number>} coords1 Point coordinate
       * @param {Array<number>} coords2 Point coordinate
       * @returns {BBox} [west, south, east, north]
       */


      function bbox(coords1, coords2) {
        var x1 = coords1[0];
        var y1 = coords1[1];
        var x2 = coords2[0];
        var y2 = coords2[1];
        var west = x1 < x2 ? x1 : x2;
        var south = y1 < y2 ? y1 : y2;
        var east = x1 > x2 ? x1 : x2;
        var north = y1 > y2 ? y1 : y2;
        return [west, south, east, north];
      }
      /* harmony default export */


      __webpack_exports__["default"] = lineSegment;
      /***/
    },

    /***/
    "./node_modules/@turf/meta/dist/es/index.js":
    /*!**************************************************!*\
      !*** ./node_modules/@turf/meta/dist/es/index.js ***!
      \**************************************************/

    /*! exports provided: coordAll, coordEach, coordReduce, featureEach, featureReduce, findPoint, findSegment, flattenEach, flattenReduce, geomEach, geomReduce, lineEach, lineReduce, propEach, propReduce, segmentEach, segmentReduce */

    /***/
    function node_modulesTurfMetaDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coordAll", function () {
        return coordAll;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coordEach", function () {
        return coordEach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coordReduce", function () {
        return coordReduce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureEach", function () {
        return featureEach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "featureReduce", function () {
        return featureReduce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findPoint", function () {
        return findPoint;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "findSegment", function () {
        return findSegment;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flattenEach", function () {
        return flattenEach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "flattenReduce", function () {
        return flattenReduce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geomEach", function () {
        return geomEach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "geomReduce", function () {
        return geomReduce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineEach", function () {
        return lineEach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "lineReduce", function () {
        return lineReduce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "propEach", function () {
        return propEach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "propReduce", function () {
        return propReduce;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "segmentEach", function () {
        return segmentEach;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "segmentReduce", function () {
        return segmentReduce;
      });
      /* harmony import */


      var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/helpers */
      "./node_modules/@turf/helpers/dist/es/index.js");
      /**
       * Callback for coordEach
       *
       * @callback coordEachCallback
       * @param {Array<number>} currentCoord The current coordinate being processed.
       * @param {number} coordIndex The current index of the coordinate being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       */

      /**
       * Iterate over coordinates in any GeoJSON object, similar to Array.forEach()
       *
       * @name coordEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentCoord, coordIndex, featureIndex, multiFeatureIndex)
       * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {"foo": "bar"}),
       *   turf.point([36, 53], {"hello": "world"})
       * ]);
       *
       * turf.coordEach(features, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=currentCoord
       *   //=coordIndex
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       * });
       */


      function coordEach(geojson, callback, excludeWrapCoord) {
        // Handles null Geometry -- Skips this GeoJSON
        if (geojson === null) return;
        var j,
            k,
            l,
            geometry,
            stopG,
            coords,
            geometryMaybeCollection,
            wrapShrink = 0,
            coordIndex = 0,
            isGeometryCollection,
            type = geojson.type,
            isFeatureCollection = type === "FeatureCollection",
            isFeature = type === "Feature",
            stop = isFeatureCollection ? geojson.features.length : 1; // This logic may look a little weird. The reason why it is that way
        // is because it's trying to be fast. GeoJSON supports multiple kinds
        // of objects at its root: FeatureCollection, Features, Geometries.
        // This function has the responsibility of handling all of them, and that
        // means that some of the `for` loops you see below actually just don't apply
        // to certain inputs. For instance, if you give this just a
        // Point geometry, then both loops are short-circuited and all we do
        // is gradually rename the input until it's called 'geometry'.
        //
        // This also aims to allocate as few resources as possible: just a
        // few numbers and booleans, rather than any temporary arrays as would
        // be required with the normalization approach.

        for (var featureIndex = 0; featureIndex < stop; featureIndex++) {
          geometryMaybeCollection = isFeatureCollection ? geojson.features[featureIndex].geometry : isFeature ? geojson.geometry : geojson;
          isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
          stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

          for (var geomIndex = 0; geomIndex < stopG; geomIndex++) {
            var multiFeatureIndex = 0;
            var geometryIndex = 0;
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[geomIndex] : geometryMaybeCollection; // Handles null Geometry -- Skips this geometry

            if (geometry === null) continue;
            coords = geometry.coordinates;
            var geomType = geometry.type;
            wrapShrink = excludeWrapCoord && (geomType === "Polygon" || geomType === "MultiPolygon") ? 1 : 0;

            switch (geomType) {
              case null:
                break;

              case "Point":
                if (callback(coords, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                coordIndex++;
                multiFeatureIndex++;
                break;

              case "LineString":
              case "MultiPoint":
                for (j = 0; j < coords.length; j++) {
                  if (callback(coords[j], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                  coordIndex++;
                  if (geomType === "MultiPoint") multiFeatureIndex++;
                }

                if (geomType === "LineString") multiFeatureIndex++;
                break;

              case "Polygon":
              case "MultiLineString":
                for (j = 0; j < coords.length; j++) {
                  for (k = 0; k < coords[j].length - wrapShrink; k++) {
                    if (callback(coords[j][k], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                    coordIndex++;
                  }

                  if (geomType === "MultiLineString") multiFeatureIndex++;
                  if (geomType === "Polygon") geometryIndex++;
                }

                if (geomType === "Polygon") multiFeatureIndex++;
                break;

              case "MultiPolygon":
                for (j = 0; j < coords.length; j++) {
                  geometryIndex = 0;

                  for (k = 0; k < coords[j].length; k++) {
                    for (l = 0; l < coords[j][k].length - wrapShrink; l++) {
                      if (callback(coords[j][k][l], coordIndex, featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
                      coordIndex++;
                    }

                    geometryIndex++;
                  }

                  multiFeatureIndex++;
                }

                break;

              case "GeometryCollection":
                for (j = 0; j < geometry.geometries.length; j++) {
                  if (coordEach(geometry.geometries[j], callback, excludeWrapCoord) === false) return false;
                }

                break;

              default:
                throw new Error("Unknown Geometry Type");
            }
          }
        }
      }
      /**
       * Callback for coordReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback coordReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Array<number>} currentCoord The current coordinate being processed.
       * @param {number} coordIndex The current index of the coordinate being processed.
       * Starts at index 0, if an initialValue is provided, and at index 1 otherwise.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       */

      /**
       * Reduce coordinates in any GeoJSON object, similar to Array.reduce()
       *
       * @name coordReduce
       * @param {FeatureCollection|Geometry|Feature} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentCoord, coordIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @param {boolean} [excludeWrapCoord=false] whether or not to include the final coordinate of LinearRings that wraps the ring in its iteration.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {"foo": "bar"}),
       *   turf.point([36, 53], {"hello": "world"})
       * ]);
       *
       * turf.coordReduce(features, function (previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=previousValue
       *   //=currentCoord
       *   //=coordIndex
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       *   return currentCoord;
       * });
       */


      function coordReduce(geojson, callback, initialValue, excludeWrapCoord) {
        var previousValue = initialValue;
        coordEach(geojson, function (currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex) {
          if (coordIndex === 0 && initialValue === undefined) previousValue = currentCoord;else previousValue = callback(previousValue, currentCoord, coordIndex, featureIndex, multiFeatureIndex, geometryIndex);
        }, excludeWrapCoord);
        return previousValue;
      }
      /**
       * Callback for propEach
       *
       * @callback propEachCallback
       * @param {Object} currentProperties The current Properties being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Iterate over properties in any GeoJSON object, similar to Array.forEach()
       *
       * @name propEach
       * @param {FeatureCollection|Feature} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentProperties, featureIndex)
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.propEach(features, function (currentProperties, featureIndex) {
       *   //=currentProperties
       *   //=featureIndex
       * });
       */


      function propEach(geojson, callback) {
        var i;

        switch (geojson.type) {
          case "FeatureCollection":
            for (i = 0; i < geojson.features.length; i++) {
              if (callback(geojson.features[i].properties, i) === false) break;
            }

            break;

          case "Feature":
            callback(geojson.properties, 0);
            break;
        }
      }
      /**
       * Callback for propReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback propReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {*} currentProperties The current Properties being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Reduce properties in any GeoJSON object into a single value,
       * similar to how Array.reduce works. However, in this case we lazily run
       * the reduction, so an array of all properties is unnecessary.
       *
       * @name propReduce
       * @param {FeatureCollection|Feature} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentProperties, featureIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.propReduce(features, function (previousValue, currentProperties, featureIndex) {
       *   //=previousValue
       *   //=currentProperties
       *   //=featureIndex
       *   return currentProperties
       * });
       */


      function propReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        propEach(geojson, function (currentProperties, featureIndex) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentProperties;else previousValue = callback(previousValue, currentProperties, featureIndex);
        });
        return previousValue;
      }
      /**
       * Callback for featureEach
       *
       * @callback featureEachCallback
       * @param {Feature<any>} currentFeature The current Feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Iterate over features in any GeoJSON object, similar to
       * Array.forEach.
       *
       * @name featureEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentFeature, featureIndex)
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {foo: 'bar'}),
       *   turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.featureEach(features, function (currentFeature, featureIndex) {
       *   //=currentFeature
       *   //=featureIndex
       * });
       */


      function featureEach(geojson, callback) {
        if (geojson.type === "Feature") {
          callback(geojson, 0);
        } else if (geojson.type === "FeatureCollection") {
          for (var i = 0; i < geojson.features.length; i++) {
            if (callback(geojson.features[i], i) === false) break;
          }
        }
      }
      /**
       * Callback for featureReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback featureReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature} currentFeature The current Feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       */

      /**
       * Reduce features in any GeoJSON object, similar to Array.reduce().
       *
       * @name featureReduce
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {"foo": "bar"}),
       *   turf.point([36, 53], {"hello": "world"})
       * ]);
       *
       * turf.featureReduce(features, function (previousValue, currentFeature, featureIndex) {
       *   //=previousValue
       *   //=currentFeature
       *   //=featureIndex
       *   return currentFeature
       * });
       */


      function featureReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        featureEach(geojson, function (currentFeature, featureIndex) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentFeature;else previousValue = callback(previousValue, currentFeature, featureIndex);
        });
        return previousValue;
      }
      /**
       * Get all coordinates from any GeoJSON object.
       *
       * @name coordAll
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @returns {Array<Array<number>>} coordinate position array
       * @example
       * var features = turf.featureCollection([
       *   turf.point([26, 37], {foo: 'bar'}),
       *   turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * var coords = turf.coordAll(features);
       * //= [[26, 37], [36, 53]]
       */


      function coordAll(geojson) {
        var coords = [];
        coordEach(geojson, function (coord) {
          coords.push(coord);
        });
        return coords;
      }
      /**
       * Callback for geomEach
       *
       * @callback geomEachCallback
       * @param {Geometry} currentGeometry The current Geometry being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {Object} featureProperties The current Feature Properties being processed.
       * @param {Array<number>} featureBBox The current Feature BBox being processed.
       * @param {number|string} featureId The current Feature Id being processed.
       */

      /**
       * Iterate over each geometry in any GeoJSON object, similar to Array.forEach()
       *
       * @name geomEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
       * @returns {void}
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.geomEach(features, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
       *   //=currentGeometry
       *   //=featureIndex
       *   //=featureProperties
       *   //=featureBBox
       *   //=featureId
       * });
       */


      function geomEach(geojson, callback) {
        var i,
            j,
            g,
            geometry,
            stopG,
            geometryMaybeCollection,
            isGeometryCollection,
            featureProperties,
            featureBBox,
            featureId,
            featureIndex = 0,
            isFeatureCollection = geojson.type === "FeatureCollection",
            isFeature = geojson.type === "Feature",
            stop = isFeatureCollection ? geojson.features.length : 1; // This logic may look a little weird. The reason why it is that way
        // is because it's trying to be fast. GeoJSON supports multiple kinds
        // of objects at its root: FeatureCollection, Features, Geometries.
        // This function has the responsibility of handling all of them, and that
        // means that some of the `for` loops you see below actually just don't apply
        // to certain inputs. For instance, if you give this just a
        // Point geometry, then both loops are short-circuited and all we do
        // is gradually rename the input until it's called 'geometry'.
        //
        // This also aims to allocate as few resources as possible: just a
        // few numbers and booleans, rather than any temporary arrays as would
        // be required with the normalization approach.

        for (i = 0; i < stop; i++) {
          geometryMaybeCollection = isFeatureCollection ? geojson.features[i].geometry : isFeature ? geojson.geometry : geojson;
          featureProperties = isFeatureCollection ? geojson.features[i].properties : isFeature ? geojson.properties : {};
          featureBBox = isFeatureCollection ? geojson.features[i].bbox : isFeature ? geojson.bbox : undefined;
          featureId = isFeatureCollection ? geojson.features[i].id : isFeature ? geojson.id : undefined;
          isGeometryCollection = geometryMaybeCollection ? geometryMaybeCollection.type === "GeometryCollection" : false;
          stopG = isGeometryCollection ? geometryMaybeCollection.geometries.length : 1;

          for (g = 0; g < stopG; g++) {
            geometry = isGeometryCollection ? geometryMaybeCollection.geometries[g] : geometryMaybeCollection; // Handle null Geometry

            if (geometry === null) {
              if (callback(null, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
              continue;
            }

            switch (geometry.type) {
              case "Point":
              case "LineString":
              case "MultiPoint":
              case "Polygon":
              case "MultiLineString":
              case "MultiPolygon":
                {
                  if (callback(geometry, featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                  break;
                }

              case "GeometryCollection":
                {
                  for (j = 0; j < geometry.geometries.length; j++) {
                    if (callback(geometry.geometries[j], featureIndex, featureProperties, featureBBox, featureId) === false) return false;
                  }

                  break;
                }

              default:
                throw new Error("Unknown Geometry Type");
            }
          } // Only increase `featureIndex` per each feature


          featureIndex++;
        }
      }
      /**
       * Callback for geomReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback geomReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Geometry} currentGeometry The current Geometry being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {Object} featureProperties The current Feature Properties being processed.
       * @param {Array<number>} featureBBox The current Feature BBox being processed.
       * @param {number|string} featureId The current Feature Id being processed.
       */

      /**
       * Reduce geometry in any GeoJSON object, similar to Array.reduce().
       *
       * @name geomReduce
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.point([36, 53], {hello: 'world'})
       * ]);
       *
       * turf.geomReduce(features, function (previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
       *   //=previousValue
       *   //=currentGeometry
       *   //=featureIndex
       *   //=featureProperties
       *   //=featureBBox
       *   //=featureId
       *   return currentGeometry
       * });
       */


      function geomReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        geomEach(geojson, function (currentGeometry, featureIndex, featureProperties, featureBBox, featureId) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentGeometry;else previousValue = callback(previousValue, currentGeometry, featureIndex, featureProperties, featureBBox, featureId);
        });
        return previousValue;
      }
      /**
       * Callback for flattenEach
       *
       * @callback flattenEachCallback
       * @param {Feature} currentFeature The current flattened feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       */

      /**
       * Iterate over flattened features in any GeoJSON object, similar to
       * Array.forEach.
       *
       * @name flattenEach
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (currentFeature, featureIndex, multiFeatureIndex)
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
       * ]);
       *
       * turf.flattenEach(features, function (currentFeature, featureIndex, multiFeatureIndex) {
       *   //=currentFeature
       *   //=featureIndex
       *   //=multiFeatureIndex
       * });
       */


      function flattenEach(geojson, callback) {
        geomEach(geojson, function (geometry, featureIndex, properties, bbox, id) {
          // Callback for single geometry
          var type = geometry === null ? null : geometry.type;

          switch (type) {
            case null:
            case "Point":
            case "LineString":
            case "Polygon":
              if (callback(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(geometry, properties, {
                bbox: bbox,
                id: id
              }), featureIndex, 0) === false) return false;
              return;
          }

          var geomType; // Callback for multi-geometry

          switch (type) {
            case "MultiPoint":
              geomType = "Point";
              break;

            case "MultiLineString":
              geomType = "LineString";
              break;

            case "MultiPolygon":
              geomType = "Polygon";
              break;
          }

          for (var multiFeatureIndex = 0; multiFeatureIndex < geometry.coordinates.length; multiFeatureIndex++) {
            var coordinate = geometry.coordinates[multiFeatureIndex];
            var geom = {
              type: geomType,
              coordinates: coordinate
            };
            if (callback(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["feature"])(geom, properties), featureIndex, multiFeatureIndex) === false) return false;
          }
        });
      }
      /**
       * Callback for flattenReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback flattenReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature} currentFeature The current Feature being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       */

      /**
       * Reduce flattened features in any GeoJSON object, similar to Array.reduce().
       *
       * @name flattenReduce
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON object
       * @param {Function} callback a method that takes (previousValue, currentFeature, featureIndex, multiFeatureIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var features = turf.featureCollection([
       *     turf.point([26, 37], {foo: 'bar'}),
       *     turf.multiPoint([[40, 30], [36, 53]], {hello: 'world'})
       * ]);
       *
       * turf.flattenReduce(features, function (previousValue, currentFeature, featureIndex, multiFeatureIndex) {
       *   //=previousValue
       *   //=currentFeature
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   return currentFeature
       * });
       */


      function flattenReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        flattenEach(geojson, function (currentFeature, featureIndex, multiFeatureIndex) {
          if (featureIndex === 0 && multiFeatureIndex === 0 && initialValue === undefined) previousValue = currentFeature;else previousValue = callback(previousValue, currentFeature, featureIndex, multiFeatureIndex);
        });
        return previousValue;
      }
      /**
       * Callback for segmentEach
       *
       * @callback segmentEachCallback
       * @param {Feature<LineString>} currentSegment The current Segment being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       * @param {number} segmentIndex The current index of the Segment being processed.
       * @returns {void}
       */

      /**
       * Iterate over 2-vertex line segment in any GeoJSON object, similar to Array.forEach()
       * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
       * @param {Function} callback a method that takes (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex)
       * @returns {void}
       * @example
       * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
       *
       * // Iterate over GeoJSON by 2-vertex segments
       * turf.segmentEach(polygon, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
       *   //=currentSegment
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       *   //=segmentIndex
       * });
       *
       * // Calculate the total number of segments
       * var total = 0;
       * turf.segmentEach(polygon, function () {
       *     total++;
       * });
       */


      function segmentEach(geojson, callback) {
        flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
          var segmentIndex = 0; // Exclude null Geometries

          if (!feature.geometry) return; // (Multi)Point geometries do not contain segments therefore they are ignored during this operation.

          var type = feature.geometry.type;
          if (type === "Point" || type === "MultiPoint") return; // Generate 2-vertex line segments

          var previousCoords;
          var previousFeatureIndex = 0;
          var previousMultiIndex = 0;
          var prevGeomIndex = 0;
          if (coordEach(feature, function (currentCoord, coordIndex, featureIndexCoord, multiPartIndexCoord, geometryIndex) {
            // Simulating a meta.coordReduce() since `reduce` operations cannot be stopped by returning `false`
            if (previousCoords === undefined || featureIndex > previousFeatureIndex || multiPartIndexCoord > previousMultiIndex || geometryIndex > prevGeomIndex) {
              previousCoords = currentCoord;
              previousFeatureIndex = featureIndex;
              previousMultiIndex = multiPartIndexCoord;
              prevGeomIndex = geometryIndex;
              segmentIndex = 0;
              return;
            }

            var currentSegment = Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])([previousCoords, currentCoord], feature.properties);
            if (callback(currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) === false) return false;
            segmentIndex++;
            previousCoords = currentCoord;
          }) === false) return false;
        });
      }
      /**
       * Callback for segmentReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback segmentReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature<LineString>} currentSegment The current Segment being processed.
       * @param {number} featureIndex The current index of the Feature being processed.
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed.
       * @param {number} geometryIndex The current index of the Geometry being processed.
       * @param {number} segmentIndex The current index of the Segment being processed.
       */

      /**
       * Reduce 2-vertex line segment in any GeoJSON object, similar to Array.reduce()
       * (Multi)Point geometries do not contain segments therefore they are ignored during this operation.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson any GeoJSON
       * @param {Function} callback a method that takes (previousValue, currentSegment, currentIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {void}
       * @example
       * var polygon = turf.polygon([[[-50, 5], [-40, -10], [-50, -10], [-40, 5], [-50, 5]]]);
       *
       * // Iterate over GeoJSON by 2-vertex segments
       * turf.segmentReduce(polygon, function (previousSegment, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
       *   //= previousSegment
       *   //= currentSegment
       *   //= featureIndex
       *   //= multiFeatureIndex
       *   //= geometryIndex
       *   //= segmentIndex
       *   return currentSegment
       * });
       *
       * // Calculate the total number of segments
       * var initialValue = 0
       * var total = turf.segmentReduce(polygon, function (previousValue) {
       *     previousValue++;
       *     return previousValue;
       * }, initialValue);
       */


      function segmentReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        var started = false;
        segmentEach(geojson, function (currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex) {
          if (started === false && initialValue === undefined) previousValue = currentSegment;else previousValue = callback(previousValue, currentSegment, featureIndex, multiFeatureIndex, geometryIndex, segmentIndex);
          started = true;
        });
        return previousValue;
      }
      /**
       * Callback for lineEach
       *
       * @callback lineEachCallback
       * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed
       * @param {number} featureIndex The current index of the Feature being processed
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
       * @param {number} geometryIndex The current index of the Geometry being processed
       */

      /**
       * Iterate over line or ring coordinates in LineString, Polygon, MultiLineString, MultiPolygon Features or Geometries,
       * similar to Array.forEach.
       *
       * @name lineEach
       * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
       * @param {Function} callback a method that takes (currentLine, featureIndex, multiFeatureIndex, geometryIndex)
       * @example
       * var multiLine = turf.multiLineString([
       *   [[26, 37], [35, 45]],
       *   [[36, 53], [38, 50], [41, 55]]
       * ]);
       *
       * turf.lineEach(multiLine, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=currentLine
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       * });
       */


      function lineEach(geojson, callback) {
        // validation
        if (!geojson) throw new Error("geojson is required");
        flattenEach(geojson, function (feature, featureIndex, multiFeatureIndex) {
          if (feature.geometry === null) return;
          var type = feature.geometry.type;
          var coords = feature.geometry.coordinates;

          switch (type) {
            case "LineString":
              if (callback(feature, featureIndex, multiFeatureIndex, 0, 0) === false) return false;
              break;

            case "Polygon":
              for (var geometryIndex = 0; geometryIndex < coords.length; geometryIndex++) {
                if (callback(Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(coords[geometryIndex], feature.properties), featureIndex, multiFeatureIndex, geometryIndex) === false) return false;
              }

              break;
          }
        });
      }
      /**
       * Callback for lineReduce
       *
       * The first time the callback function is called, the values provided as arguments depend
       * on whether the reduce method has an initialValue argument.
       *
       * If an initialValue is provided to the reduce method:
       *  - The previousValue argument is initialValue.
       *  - The currentValue argument is the value of the first element present in the array.
       *
       * If an initialValue is not provided:
       *  - The previousValue argument is the value of the first element present in the array.
       *  - The currentValue argument is the value of the second element present in the array.
       *
       * @callback lineReduceCallback
       * @param {*} previousValue The accumulated value previously returned in the last invocation
       * of the callback, or initialValue, if supplied.
       * @param {Feature<LineString>} currentLine The current LineString|LinearRing being processed.
       * @param {number} featureIndex The current index of the Feature being processed
       * @param {number} multiFeatureIndex The current index of the Multi-Feature being processed
       * @param {number} geometryIndex The current index of the Geometry being processed
       */

      /**
       * Reduce features in any GeoJSON object, similar to Array.reduce().
       *
       * @name lineReduce
       * @param {Geometry|Feature<LineString|Polygon|MultiLineString|MultiPolygon>} geojson object
       * @param {Function} callback a method that takes (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex)
       * @param {*} [initialValue] Value to use as the first argument to the first call of the callback.
       * @returns {*} The value that results from the reduction.
       * @example
       * var multiPoly = turf.multiPolygon([
       *   turf.polygon([[[12,48],[2,41],[24,38],[12,48]], [[9,44],[13,41],[13,45],[9,44]]]),
       *   turf.polygon([[[5, 5], [0, 0], [2, 2], [4, 4], [5, 5]]])
       * ]);
       *
       * turf.lineReduce(multiPoly, function (previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
       *   //=previousValue
       *   //=currentLine
       *   //=featureIndex
       *   //=multiFeatureIndex
       *   //=geometryIndex
       *   return currentLine
       * });
       */


      function lineReduce(geojson, callback, initialValue) {
        var previousValue = initialValue;
        lineEach(geojson, function (currentLine, featureIndex, multiFeatureIndex, geometryIndex) {
          if (featureIndex === 0 && initialValue === undefined) previousValue = currentLine;else previousValue = callback(previousValue, currentLine, featureIndex, multiFeatureIndex, geometryIndex);
        });
        return previousValue;
      }
      /**
       * Finds a particular 2-vertex LineString Segment from a GeoJSON using `@turf/meta` indexes.
       *
       * Negative indexes are permitted.
       * Point & MultiPoint will always return null.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
       * @param {Object} [options={}] Optional parameters
       * @param {number} [options.featureIndex=0] Feature Index
       * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
       * @param {number} [options.geometryIndex=0] Geometry Index
       * @param {number} [options.segmentIndex=0] Segment Index
       * @param {Object} [options.properties={}] Translate Properties to output LineString
       * @param {BBox} [options.bbox={}] Translate BBox to output LineString
       * @param {number|string} [options.id={}] Translate Id to output LineString
       * @returns {Feature<LineString>} 2-vertex GeoJSON Feature LineString
       * @example
       * var multiLine = turf.multiLineString([
       *     [[10, 10], [50, 30], [30, 40]],
       *     [[-10, -10], [-50, -30], [-30, -40]]
       * ]);
       *
       * // First Segment (defaults are 0)
       * turf.findSegment(multiLine);
       * // => Feature<LineString<[[10, 10], [50, 30]]>>
       *
       * // First Segment of 2nd Multi Feature
       * turf.findSegment(multiLine, {multiFeatureIndex: 1});
       * // => Feature<LineString<[[-10, -10], [-50, -30]]>>
       *
       * // Last Segment of Last Multi Feature
       * turf.findSegment(multiLine, {multiFeatureIndex: -1, segmentIndex: -1});
       * // => Feature<LineString<[[-50, -30], [-30, -40]]>>
       */


      function findSegment(geojson, options) {
        // Optional Parameters
        options = options || {};
        if (!Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isObject"])(options)) throw new Error("options is invalid");
        var featureIndex = options.featureIndex || 0;
        var multiFeatureIndex = options.multiFeatureIndex || 0;
        var geometryIndex = options.geometryIndex || 0;
        var segmentIndex = options.segmentIndex || 0; // Find FeatureIndex

        var properties = options.properties;
        var geometry;

        switch (geojson.type) {
          case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;

          case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;

          case "Point":
          case "MultiPoint":
            return null;

          case "LineString":
          case "Polygon":
          case "MultiLineString":
          case "MultiPolygon":
            geometry = geojson;
            break;

          default:
            throw new Error("geojson is invalid");
        } // Find SegmentIndex


        if (geometry === null) return null;
        var coords = geometry.coordinates;

        switch (geometry.type) {
          case "Point":
          case "MultiPoint":
            return null;

          case "LineString":
            if (segmentIndex < 0) segmentIndex = coords.length + segmentIndex - 1;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])([coords[segmentIndex], coords[segmentIndex + 1]], properties, options);

          case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[geometryIndex].length + segmentIndex - 1;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])([coords[geometryIndex][segmentIndex], coords[geometryIndex][segmentIndex + 1]], properties, options);

          case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex].length + segmentIndex - 1;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])([coords[multiFeatureIndex][segmentIndex], coords[multiFeatureIndex][segmentIndex + 1]], properties, options);

          case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (segmentIndex < 0) segmentIndex = coords[multiFeatureIndex][geometryIndex].length - segmentIndex - 1;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])([coords[multiFeatureIndex][geometryIndex][segmentIndex], coords[multiFeatureIndex][geometryIndex][segmentIndex + 1]], properties, options);
        }

        throw new Error("geojson is invalid");
      }
      /**
       * Finds a particular Point from a GeoJSON using `@turf/meta` indexes.
       *
       * Negative indexes are permitted.
       *
       * @param {FeatureCollection|Feature|Geometry} geojson Any GeoJSON Feature or Geometry
       * @param {Object} [options={}] Optional parameters
       * @param {number} [options.featureIndex=0] Feature Index
       * @param {number} [options.multiFeatureIndex=0] Multi-Feature Index
       * @param {number} [options.geometryIndex=0] Geometry Index
       * @param {number} [options.coordIndex=0] Coord Index
       * @param {Object} [options.properties={}] Translate Properties to output Point
       * @param {BBox} [options.bbox={}] Translate BBox to output Point
       * @param {number|string} [options.id={}] Translate Id to output Point
       * @returns {Feature<Point>} 2-vertex GeoJSON Feature Point
       * @example
       * var multiLine = turf.multiLineString([
       *     [[10, 10], [50, 30], [30, 40]],
       *     [[-10, -10], [-50, -30], [-30, -40]]
       * ]);
       *
       * // First Segment (defaults are 0)
       * turf.findPoint(multiLine);
       * // => Feature<Point<[10, 10]>>
       *
       * // First Segment of the 2nd Multi-Feature
       * turf.findPoint(multiLine, {multiFeatureIndex: 1});
       * // => Feature<Point<[-10, -10]>>
       *
       * // Last Segment of last Multi-Feature
       * turf.findPoint(multiLine, {multiFeatureIndex: -1, coordIndex: -1});
       * // => Feature<Point<[-30, -40]>>
       */


      function findPoint(geojson, options) {
        // Optional Parameters
        options = options || {};
        if (!Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["isObject"])(options)) throw new Error("options is invalid");
        var featureIndex = options.featureIndex || 0;
        var multiFeatureIndex = options.multiFeatureIndex || 0;
        var geometryIndex = options.geometryIndex || 0;
        var coordIndex = options.coordIndex || 0; // Find FeatureIndex

        var properties = options.properties;
        var geometry;

        switch (geojson.type) {
          case "FeatureCollection":
            if (featureIndex < 0) featureIndex = geojson.features.length + featureIndex;
            properties = properties || geojson.features[featureIndex].properties;
            geometry = geojson.features[featureIndex].geometry;
            break;

          case "Feature":
            properties = properties || geojson.properties;
            geometry = geojson.geometry;
            break;

          case "Point":
          case "MultiPoint":
            return null;

          case "LineString":
          case "Polygon":
          case "MultiLineString":
          case "MultiPolygon":
            geometry = geojson;
            break;

          default:
            throw new Error("geojson is invalid");
        } // Find Coord Index


        if (geometry === null) return null;
        var coords = geometry.coordinates;

        switch (geometry.type) {
          case "Point":
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords, properties, options);

          case "MultiPoint":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[multiFeatureIndex], properties, options);

          case "LineString":
            if (coordIndex < 0) coordIndex = coords.length + coordIndex;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[coordIndex], properties, options);

          case "Polygon":
            if (geometryIndex < 0) geometryIndex = coords.length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[geometryIndex].length + coordIndex;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[geometryIndex][coordIndex], properties, options);

          case "MultiLineString":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex].length + coordIndex;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[multiFeatureIndex][coordIndex], properties, options);

          case "MultiPolygon":
            if (multiFeatureIndex < 0) multiFeatureIndex = coords.length + multiFeatureIndex;
            if (geometryIndex < 0) geometryIndex = coords[multiFeatureIndex].length + geometryIndex;
            if (coordIndex < 0) coordIndex = coords[multiFeatureIndex][geometryIndex].length - coordIndex;
            return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["point"])(coords[multiFeatureIndex][geometryIndex][coordIndex], properties, options);
        }

        throw new Error("geojson is invalid");
      }
      /***/

    },

    /***/
    "./node_modules/@turf/polygon-to-line/dist/es/index.js":
    /*!*************************************************************!*\
      !*** ./node_modules/@turf/polygon-to-line/dist/es/index.js ***!
      \*************************************************************/

    /*! exports provided: default, polygonToLine, multiPolygonToLine, coordsToLine */

    /***/
    function node_modulesTurfPolygonToLineDistEsIndexJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "polygonToLine", function () {
        return polygonToLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "multiPolygonToLine", function () {
        return multiPolygonToLine;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "coordsToLine", function () {
        return coordsToLine;
      });
      /* harmony import */


      var _turf_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @turf/helpers */
      "./node_modules/@turf/helpers/dist/es/index.js");
      /* harmony import */


      var _turf_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @turf/invariant */
      "./node_modules/@turf/invariant/dist/es/index.js");
      /**
       * Converts a {@link Polygon} to {@link LineString|(Multi)LineString} or {@link MultiPolygon} to a
       * {@link FeatureCollection} of {@link LineString|(Multi)LineString}.
       *
       * @name polygonToLine
       * @param {Feature<Polygon|MultiPolygon>} poly Feature to convert
       * @param {Object} [options={}] Optional parameters
       * @param {Object} [options.properties={}] translates GeoJSON properties to Feature
       * @returns {FeatureCollection|Feature<LineString|MultiLinestring>} converted (Multi)Polygon to (Multi)LineString
       * @example
       * var poly = turf.polygon([[[125, -30], [145, -30], [145, -20], [125, -20], [125, -30]]]);
       *
       * var line = turf.polygonToLine(poly);
       *
       * //addToMap
       * var addToMap = [line];
       */

      /* harmony default export */


      __webpack_exports__["default"] = function (poly, options) {
        if (options === void 0) {
          options = {};
        }

        var geom = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getGeom"])(poly);

        if (!options.properties && poly.type === "Feature") {
          options.properties = poly.properties;
        }

        switch (geom.type) {
          case "Polygon":
            return polygonToLine(geom, options);

          case "MultiPolygon":
            return multiPolygonToLine(geom, options);

          default:
            throw new Error("invalid poly");
        }
      };
      /**
       * @private
       */


      function polygonToLine(poly, options) {
        if (options === void 0) {
          options = {};
        }

        var geom = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getGeom"])(poly);
        var coords = geom.coordinates;
        var properties = options.properties ? options.properties : poly.type === "Feature" ? poly.properties : {};
        return coordsToLine(coords, properties);
      }
      /**
       * @private
       */


      function multiPolygonToLine(multiPoly, options) {
        if (options === void 0) {
          options = {};
        }

        var geom = Object(_turf_invariant__WEBPACK_IMPORTED_MODULE_1__["getGeom"])(multiPoly);
        var coords = geom.coordinates;
        var properties = options.properties ? options.properties : multiPoly.type === "Feature" ? multiPoly.properties : {};
        var lines = [];
        coords.forEach(function (coord) {
          lines.push(coordsToLine(coord, properties));
        });
        return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["featureCollection"])(lines);
      }
      /**
       * @private
       */


      function coordsToLine(coords, properties) {
        if (coords.length > 1) {
          return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["multiLineString"])(coords, properties);
        }

        return Object(_turf_helpers__WEBPACK_IMPORTED_MODULE_0__["lineString"])(coords[0], properties);
      }
      /***/

    },

    /***/
    "./node_modules/geojson-rbush/index.js":
    /*!*********************************************!*\
      !*** ./node_modules/geojson-rbush/index.js ***!
      \*********************************************/

    /*! no static exports found */

    /***/
    function node_modulesGeojsonRbushIndexJs(module, exports, __webpack_require__) {
      var rbush = __webpack_require__(
      /*! rbush */
      "./node_modules/rbush/index.js");

      var helpers = __webpack_require__(
      /*! @turf/helpers */
      "./node_modules/@turf/helpers/dist/es/index.js");

      var meta = __webpack_require__(
      /*! @turf/meta */
      "./node_modules/@turf/meta/dist/es/index.js");

      var turfBBox = __webpack_require__(
      /*! @turf/bbox */
      "./node_modules/@turf/bbox/dist/es/index.js")["default"];

      var featureEach = meta.featureEach;
      var coordEach = meta.coordEach;
      var polygon = helpers.polygon;
      var featureCollection = helpers.featureCollection;
      /**
       * GeoJSON implementation of [RBush](https://github.com/mourner/rbush#rbush) spatial index.
       *
       * @name rbush
       * @param {number} [maxEntries=9] defines the maximum number of entries in a tree node. 9 (used by default) is a
       * reasonable choice for most applications. Higher value means faster insertion and slower search, and vice versa.
       * @returns {RBush} GeoJSON RBush
       * @example
       * var geojsonRbush = require('geojson-rbush').default;
       * var tree = geojsonRbush();
       */

      function geojsonRbush(maxEntries) {
        var tree = rbush(maxEntries);
        /**
         * [insert](https://github.com/mourner/rbush#data-format)
         *
         * @param {Feature} feature insert single GeoJSON Feature
         * @returns {RBush} GeoJSON RBush
         * @example
         * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
         * tree.insert(poly)
         */

        tree.insert = function (feature) {
          if (feature.type !== 'Feature') throw new Error('invalid feature');
          feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
          return rbush.prototype.insert.call(this, feature);
        };
        /**
         * [load](https://github.com/mourner/rbush#bulk-inserting-data)
         *
         * @param {FeatureCollection|Array<Feature>} features load entire GeoJSON FeatureCollection
         * @returns {RBush} GeoJSON RBush
         * @example
         * var polys = turf.polygons([
         *     [[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]],
         *     [[[-93, 32], [-83, 32], [-83, 39], [-93, 39], [-93, 32]]]
         * ]);
         * tree.load(polys);
         */


        tree.load = function (features) {
          var load = []; // Load an Array of Features

          if (Array.isArray(features)) {
            features.forEach(function (feature) {
              if (feature.type !== 'Feature') throw new Error('invalid features');
              feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
              load.push(feature);
            });
          } else {
            // Load a FeatureCollection
            featureEach(features, function (feature) {
              if (feature.type !== 'Feature') throw new Error('invalid features');
              feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
              load.push(feature);
            });
          }

          return rbush.prototype.load.call(this, load);
        };
        /**
         * [remove](https://github.com/mourner/rbush#removing-data)
         *
         * @param {Feature} feature remove single GeoJSON Feature
         * @param {Function} equals Pass a custom equals function to compare by value for removal.
         * @returns {RBush} GeoJSON RBush
         * @example
         * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
         *
         * tree.remove(poly);
         */


        tree.remove = function (feature, equals) {
          if (feature.type !== 'Feature') throw new Error('invalid feature');
          feature.bbox = feature.bbox ? feature.bbox : turfBBox(feature);
          return rbush.prototype.remove.call(this, feature, equals);
        };
        /**
         * [clear](https://github.com/mourner/rbush#removing-data)
         *
         * @returns {RBush} GeoJSON Rbush
         * @example
         * tree.clear()
         */


        tree.clear = function () {
          return rbush.prototype.clear.call(this);
        };
        /**
         * [search](https://github.com/mourner/rbush#search)
         *
         * @param {BBox|FeatureCollection|Feature} geojson search with GeoJSON
         * @returns {FeatureCollection} all features that intersects with the given GeoJSON.
         * @example
         * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
         *
         * tree.search(poly);
         */


        tree.search = function (geojson) {
          var features = rbush.prototype.search.call(this, this.toBBox(geojson));
          return featureCollection(features);
        };
        /**
         * [collides](https://github.com/mourner/rbush#collisions)
         *
         * @param {BBox|FeatureCollection|Feature} geojson collides with GeoJSON
         * @returns {boolean} true if there are any items intersecting the given GeoJSON, otherwise false.
         * @example
         * var poly = turf.polygon([[[-78, 41], [-67, 41], [-67, 48], [-78, 48], [-78, 41]]]);
         *
         * tree.collides(poly);
         */


        tree.collides = function (geojson) {
          return rbush.prototype.collides.call(this, this.toBBox(geojson));
        };
        /**
         * [all](https://github.com/mourner/rbush#search)
         *
         * @returns {FeatureCollection} all the features in RBush
         * @example
         * tree.all()
         */


        tree.all = function () {
          var features = rbush.prototype.all.call(this);
          return featureCollection(features);
        };
        /**
         * [toJSON](https://github.com/mourner/rbush#export-and-import)
         *
         * @returns {any} export data as JSON object
         * @example
         * var exported = tree.toJSON()
         */


        tree.toJSON = function () {
          return rbush.prototype.toJSON.call(this);
        };
        /**
         * [fromJSON](https://github.com/mourner/rbush#export-and-import)
         *
         * @param {any} json import previously exported data
         * @returns {RBush} GeoJSON RBush
         * @example
         * var exported = {
         *   "children": [
         *     {
         *       "type": "Feature",
         *       "geometry": {
         *         "type": "Point",
         *         "coordinates": [110, 50]
         *       },
         *       "properties": {},
         *       "bbox": [110, 50, 110, 50]
         *     }
         *   ],
         *   "height": 1,
         *   "leaf": true,
         *   "minX": 110,
         *   "minY": 50,
         *   "maxX": 110,
         *   "maxY": 50
         * }
         * tree.fromJSON(exported)
         */


        tree.fromJSON = function (json) {
          return rbush.prototype.fromJSON.call(this, json);
        };
        /**
         * Converts GeoJSON to {minX, minY, maxX, maxY} schema
         *
         * @private
         * @param {BBox|FeatureCollection|Feature} geojson feature(s) to retrieve BBox from
         * @returns {Object} converted to {minX, minY, maxX, maxY}
         */


        tree.toBBox = function (geojson) {
          var bbox;
          if (geojson.bbox) bbox = geojson.bbox;else if (Array.isArray(geojson) && geojson.length === 4) bbox = geojson;else if (Array.isArray(geojson) && geojson.length === 6) bbox = [geojson[0], geojson[1], geojson[3], geojson[4]];else if (geojson.type === 'Feature') bbox = turfBBox(geojson);else if (geojson.type === 'FeatureCollection') bbox = turfBBox(geojson);else throw new Error('invalid geojson');
          return {
            minX: bbox[0],
            minY: bbox[1],
            maxX: bbox[2],
            maxY: bbox[3]
          };
        };

        return tree;
      }

      module.exports = geojsonRbush;
      module.exports["default"] = geojsonRbush;
      /***/
    },

    /***/
    "./node_modules/quickselect/quickselect.js":
    /*!*************************************************!*\
      !*** ./node_modules/quickselect/quickselect.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function node_modulesQuickselectQuickselectJs(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';

        function quickselect(arr, k, left, right, compare) {
          quickselectStep(arr, k, left || 0, right || arr.length - 1, compare || defaultCompare);
        }

        function quickselectStep(arr, k, left, right, compare) {
          while (right > left) {
            if (right - left > 600) {
              var n = right - left + 1;
              var m = k - left + 1;
              var z = Math.log(n);
              var s = 0.5 * Math.exp(2 * z / 3);
              var sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
              var newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
              var newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
              quickselectStep(arr, k, newLeft, newRight, compare);
            }

            var t = arr[k];
            var i = left;
            var j = right;
            swap(arr, left, k);
            if (compare(arr[right], t) > 0) swap(arr, left, right);

            while (i < j) {
              swap(arr, i, j);
              i++;
              j--;

              while (compare(arr[i], t) < 0) {
                i++;
              }

              while (compare(arr[j], t) > 0) {
                j--;
              }
            }

            if (compare(arr[left], t) === 0) swap(arr, left, j);else {
              j++;
              swap(arr, j, right);
            }
            if (j <= k) left = j + 1;
            if (k <= j) right = j - 1;
          }
        }

        function swap(arr, i, j) {
          var tmp = arr[i];
          arr[i] = arr[j];
          arr[j] = tmp;
        }

        function defaultCompare(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }

        return quickselect;
      });
      /***/

    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppTab3Tab3PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n    <ion-toolbar color=\"primary\">\n        <ion-title> MSEMA </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n    <ion-card-header> <img src=\"assets/tab3/map.png\" height=\"30\"> WEATHER ALERTS</ion-card-header>\n    <!-- <div id=\"mapId3\" style=\"width: 100%; height: 70%\"></div> -->\n    <div \n    id=\"map\"\n  leaflet\n  style=\"width: 100%; height: 70%\"\n  \n  [leafletOptions]=\"mapOptions\"\n  (leafletMapReady)=\"onMapReady($event)\"\n></div>\n<!-- <div class=\"App\">\n</div> -->\n\n<input #ranger (input)=\"geoRadius(ranger.value)\" type=\"range\" min=0 max=400000 value=200\n />\n\n\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/rbush/index.js":
    /*!*************************************!*\
      !*** ./node_modules/rbush/index.js ***!
      \*************************************/

    /*! no static exports found */

    /***/
    function node_modulesRbushIndexJs(module, exports, __webpack_require__) {
      "use strict";

      module.exports = rbush;
      module.exports["default"] = rbush;

      var quickselect = __webpack_require__(
      /*! quickselect */
      "./node_modules/quickselect/quickselect.js");

      function rbush(maxEntries, format) {
        if (!(this instanceof rbush)) return new rbush(maxEntries, format); // max entries in a node is 9 by default; min node fill is 40% for best performance

        this._maxEntries = Math.max(4, maxEntries || 9);
        this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));

        if (format) {
          this._initFormat(format);
        }

        this.clear();
      }

      rbush.prototype = {
        all: function all() {
          return this._all(this.data, []);
        },
        search: function search(bbox) {
          var node = this.data,
              result = [],
              toBBox = this.toBBox;
          if (!intersects(bbox, node)) return result;
          var nodesToSearch = [],
              i,
              len,
              child,
              childBBox;

          while (node) {
            for (i = 0, len = node.children.length; i < len; i++) {
              child = node.children[i];
              childBBox = node.leaf ? toBBox(child) : child;

              if (intersects(bbox, childBBox)) {
                if (node.leaf) result.push(child);else if (contains(bbox, childBBox)) this._all(child, result);else nodesToSearch.push(child);
              }
            }

            node = nodesToSearch.pop();
          }

          return result;
        },
        collides: function collides(bbox) {
          var node = this.data,
              toBBox = this.toBBox;
          if (!intersects(bbox, node)) return false;
          var nodesToSearch = [],
              i,
              len,
              child,
              childBBox;

          while (node) {
            for (i = 0, len = node.children.length; i < len; i++) {
              child = node.children[i];
              childBBox = node.leaf ? toBBox(child) : child;

              if (intersects(bbox, childBBox)) {
                if (node.leaf || contains(bbox, childBBox)) return true;
                nodesToSearch.push(child);
              }
            }

            node = nodesToSearch.pop();
          }

          return false;
        },
        load: function load(data) {
          if (!(data && data.length)) return this;

          if (data.length < this._minEntries) {
            for (var i = 0, len = data.length; i < len; i++) {
              this.insert(data[i]);
            }

            return this;
          } // recursively build the tree with the given data from scratch using OMT algorithm


          var node = this._build(data.slice(), 0, data.length - 1, 0);

          if (!this.data.children.length) {
            // save as is if tree is empty
            this.data = node;
          } else if (this.data.height === node.height) {
            // split root if trees have the same height
            this._splitRoot(this.data, node);
          } else {
            if (this.data.height < node.height) {
              // swap trees if inserted one is bigger
              var tmpNode = this.data;
              this.data = node;
              node = tmpNode;
            } // insert the small tree into the large tree at appropriate level


            this._insert(node, this.data.height - node.height - 1, true);
          }

          return this;
        },
        insert: function insert(item) {
          if (item) this._insert(item, this.data.height - 1);
          return this;
        },
        clear: function clear() {
          this.data = createNode([]);
          return this;
        },
        remove: function remove(item, equalsFn) {
          if (!item) return this;
          var node = this.data,
              bbox = this.toBBox(item),
              path = [],
              indexes = [],
              i,
              parent,
              index,
              goingUp; // depth-first iterative tree traversal

          while (node || path.length) {
            if (!node) {
              // go up
              node = path.pop();
              parent = path[path.length - 1];
              i = indexes.pop();
              goingUp = true;
            }

            if (node.leaf) {
              // check current node
              index = findItem(item, node.children, equalsFn);

              if (index !== -1) {
                // item found, remove the item and condense tree upwards
                node.children.splice(index, 1);
                path.push(node);

                this._condense(path);

                return this;
              }
            }

            if (!goingUp && !node.leaf && contains(node, bbox)) {
              // go down
              path.push(node);
              indexes.push(i);
              i = 0;
              parent = node;
              node = node.children[0];
            } else if (parent) {
              // go right
              i++;
              node = parent.children[i];
              goingUp = false;
            } else node = null; // nothing found

          }

          return this;
        },
        toBBox: function toBBox(item) {
          return item;
        },
        compareMinX: compareNodeMinX,
        compareMinY: compareNodeMinY,
        toJSON: function toJSON() {
          return this.data;
        },
        fromJSON: function fromJSON(data) {
          this.data = data;
          return this;
        },
        _all: function _all(node, result) {
          var nodesToSearch = [];

          while (node) {
            if (node.leaf) result.push.apply(result, node.children);else nodesToSearch.push.apply(nodesToSearch, node.children);
            node = nodesToSearch.pop();
          }

          return result;
        },
        _build: function _build(items, left, right, height) {
          var N = right - left + 1,
              M = this._maxEntries,
              node;

          if (N <= M) {
            // reached leaf level; return leaf
            node = createNode(items.slice(left, right + 1));
            calcBBox(node, this.toBBox);
            return node;
          }

          if (!height) {
            // target height of the bulk-loaded tree
            height = Math.ceil(Math.log(N) / Math.log(M)); // target number of root entries to maximize storage utilization

            M = Math.ceil(N / Math.pow(M, height - 1));
          }

          node = createNode([]);
          node.leaf = false;
          node.height = height; // split the items into M mostly square tiles

          var N2 = Math.ceil(N / M),
              N1 = N2 * Math.ceil(Math.sqrt(M)),
              i,
              j,
              right2,
              right3;
          multiSelect(items, left, right, N1, this.compareMinX);

          for (i = left; i <= right; i += N1) {
            right2 = Math.min(i + N1 - 1, right);
            multiSelect(items, i, right2, N2, this.compareMinY);

            for (j = i; j <= right2; j += N2) {
              right3 = Math.min(j + N2 - 1, right2); // pack each entry recursively

              node.children.push(this._build(items, j, right3, height - 1));
            }
          }

          calcBBox(node, this.toBBox);
          return node;
        },
        _chooseSubtree: function _chooseSubtree(bbox, node, level, path) {
          var i, len, child, targetNode, area, enlargement, minArea, minEnlargement;

          while (true) {
            path.push(node);
            if (node.leaf || path.length - 1 === level) break;
            minArea = minEnlargement = Infinity;

            for (i = 0, len = node.children.length; i < len; i++) {
              child = node.children[i];
              area = bboxArea(child);
              enlargement = enlargedArea(bbox, child) - area; // choose entry with the least area enlargement

              if (enlargement < minEnlargement) {
                minEnlargement = enlargement;
                minArea = area < minArea ? area : minArea;
                targetNode = child;
              } else if (enlargement === minEnlargement) {
                // otherwise choose one with the smallest area
                if (area < minArea) {
                  minArea = area;
                  targetNode = child;
                }
              }
            }

            node = targetNode || node.children[0];
          }

          return node;
        },
        _insert: function _insert(item, level, isNode) {
          var toBBox = this.toBBox,
              bbox = isNode ? item : toBBox(item),
              insertPath = []; // find the best node for accommodating the item, saving all nodes along the path too

          var node = this._chooseSubtree(bbox, this.data, level, insertPath); // put the item into the node


          node.children.push(item);
          extend(node, bbox); // split on node overflow; propagate upwards if necessary

          while (level >= 0) {
            if (insertPath[level].children.length > this._maxEntries) {
              this._split(insertPath, level);

              level--;
            } else break;
          } // adjust bboxes along the insertion path


          this._adjustParentBBoxes(bbox, insertPath, level);
        },
        // split overflowed node into two
        _split: function _split(insertPath, level) {
          var node = insertPath[level],
              M = node.children.length,
              m = this._minEntries;

          this._chooseSplitAxis(node, m, M);

          var splitIndex = this._chooseSplitIndex(node, m, M);

          var newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
          newNode.height = node.height;
          newNode.leaf = node.leaf;
          calcBBox(node, this.toBBox);
          calcBBox(newNode, this.toBBox);
          if (level) insertPath[level - 1].children.push(newNode);else this._splitRoot(node, newNode);
        },
        _splitRoot: function _splitRoot(node, newNode) {
          // split root node
          this.data = createNode([node, newNode]);
          this.data.height = node.height + 1;
          this.data.leaf = false;
          calcBBox(this.data, this.toBBox);
        },
        _chooseSplitIndex: function _chooseSplitIndex(node, m, M) {
          var i, bbox1, bbox2, overlap, area, minOverlap, minArea, index;
          minOverlap = minArea = Infinity;

          for (i = m; i <= M - m; i++) {
            bbox1 = distBBox(node, 0, i, this.toBBox);
            bbox2 = distBBox(node, i, M, this.toBBox);
            overlap = intersectionArea(bbox1, bbox2);
            area = bboxArea(bbox1) + bboxArea(bbox2); // choose distribution with minimum overlap

            if (overlap < minOverlap) {
              minOverlap = overlap;
              index = i;
              minArea = area < minArea ? area : minArea;
            } else if (overlap === minOverlap) {
              // otherwise choose distribution with minimum area
              if (area < minArea) {
                minArea = area;
                index = i;
              }
            }
          }

          return index;
        },
        // sorts node children by the best axis for split
        _chooseSplitAxis: function _chooseSplitAxis(node, m, M) {
          var compareMinX = node.leaf ? this.compareMinX : compareNodeMinX,
              compareMinY = node.leaf ? this.compareMinY : compareNodeMinY,
              xMargin = this._allDistMargin(node, m, M, compareMinX),
              yMargin = this._allDistMargin(node, m, M, compareMinY); // if total distributions margin value is minimal for x, sort by minX,
          // otherwise it's already sorted by minY


          if (xMargin < yMargin) node.children.sort(compareMinX);
        },
        // total margin of all possible split distributions where each node is at least m full
        _allDistMargin: function _allDistMargin(node, m, M, compare) {
          node.children.sort(compare);
          var toBBox = this.toBBox,
              leftBBox = distBBox(node, 0, m, toBBox),
              rightBBox = distBBox(node, M - m, M, toBBox),
              margin = bboxMargin(leftBBox) + bboxMargin(rightBBox),
              i,
              child;

          for (i = m; i < M - m; i++) {
            child = node.children[i];
            extend(leftBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(leftBBox);
          }

          for (i = M - m - 1; i >= m; i--) {
            child = node.children[i];
            extend(rightBBox, node.leaf ? toBBox(child) : child);
            margin += bboxMargin(rightBBox);
          }

          return margin;
        },
        _adjustParentBBoxes: function _adjustParentBBoxes(bbox, path, level) {
          // adjust bboxes along the given tree path
          for (var i = level; i >= 0; i--) {
            extend(path[i], bbox);
          }
        },
        _condense: function _condense(path) {
          // go through the path, removing empty nodes and updating bboxes
          for (var i = path.length - 1, siblings; i >= 0; i--) {
            if (path[i].children.length === 0) {
              if (i > 0) {
                siblings = path[i - 1].children;
                siblings.splice(siblings.indexOf(path[i]), 1);
              } else this.clear();
            } else calcBBox(path[i], this.toBBox);
          }
        },
        _initFormat: function _initFormat(format) {
          // data format (minX, minY, maxX, maxY accessors)
          // uses eval-type function compilation instead of just accepting a toBBox function
          // because the algorithms are very sensitive to sorting functions performance,
          // so they should be dead simple and without inner calls
          var compareArr = ['return a', ' - b', ';'];
          this.compareMinX = new Function('a', 'b', compareArr.join(format[0]));
          this.compareMinY = new Function('a', 'b', compareArr.join(format[1]));
          this.toBBox = new Function('a', 'return {minX: a' + format[0] + ', minY: a' + format[1] + ', maxX: a' + format[2] + ', maxY: a' + format[3] + '};');
        }
      };

      function findItem(item, items, equalsFn) {
        if (!equalsFn) return items.indexOf(item);

        for (var i = 0; i < items.length; i++) {
          if (equalsFn(item, items[i])) return i;
        }

        return -1;
      } // calculate node's bbox from bboxes of its children


      function calcBBox(node, toBBox) {
        distBBox(node, 0, node.children.length, toBBox, node);
      } // min bounding rectangle of node children from k to p-1


      function distBBox(node, k, p, toBBox, destNode) {
        if (!destNode) destNode = createNode(null);
        destNode.minX = Infinity;
        destNode.minY = Infinity;
        destNode.maxX = -Infinity;
        destNode.maxY = -Infinity;

        for (var i = k, child; i < p; i++) {
          child = node.children[i];
          extend(destNode, node.leaf ? toBBox(child) : child);
        }

        return destNode;
      }

      function extend(a, b) {
        a.minX = Math.min(a.minX, b.minX);
        a.minY = Math.min(a.minY, b.minY);
        a.maxX = Math.max(a.maxX, b.maxX);
        a.maxY = Math.max(a.maxY, b.maxY);
        return a;
      }

      function compareNodeMinX(a, b) {
        return a.minX - b.minX;
      }

      function compareNodeMinY(a, b) {
        return a.minY - b.minY;
      }

      function bboxArea(a) {
        return (a.maxX - a.minX) * (a.maxY - a.minY);
      }

      function bboxMargin(a) {
        return a.maxX - a.minX + (a.maxY - a.minY);
      }

      function enlargedArea(a, b) {
        return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) * (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
      }

      function intersectionArea(a, b) {
        var minX = Math.max(a.minX, b.minX),
            minY = Math.max(a.minY, b.minY),
            maxX = Math.min(a.maxX, b.maxX),
            maxY = Math.min(a.maxY, b.maxY);
        return Math.max(0, maxX - minX) * Math.max(0, maxY - minY);
      }

      function contains(a, b) {
        return a.minX <= b.minX && a.minY <= b.minY && b.maxX <= a.maxX && b.maxY <= a.maxY;
      }

      function intersects(a, b) {
        return b.minX <= a.maxX && b.minY <= a.maxY && b.maxX >= a.minX && b.maxY >= a.minY;
      }

      function createNode(children) {
        return {
          children: children,
          height: 1,
          leaf: true,
          minX: Infinity,
          minY: Infinity,
          maxX: -Infinity,
          maxY: -Infinity
        };
      } // sort an array so that items come in groups of n unsorted items, with groups sorted between each other;
      // combines selection algorithm with binary divide & conquer approach


      function multiSelect(arr, left, right, n, compare) {
        var stack = [left, right],
            mid;

        while (stack.length) {
          right = stack.pop();
          left = stack.pop();
          if (right - left <= n) continue;
          mid = left + Math.ceil((right - left) / n / 2) * n;
          quickselect(arr, mid, left, right, compare);
          stack.push(left, mid, mid, right);
        }
      }
      /***/

    },

    /***/
    "./src/app/tab3/tab3-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function srcAppTab3Tab3RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.module.ts":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function srcAppTab3Tab3ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "./src/app/tab3/tab3.page.ts");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      "./src/app/explore-container/explore-container.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @asymmetrik/ngx-leaflet */
      "./node_modules/@asymmetrik/ngx-leaflet/__ivy_ngcc__/dist/index.js");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "./src/app/tab3/tab3-routing.module.ts");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_9__["LeafletModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_10__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.scss":
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppTab3Tab3PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".App {\n  height: 480px;\n  padding: 10rem;\n}\n\n.leaflet-container {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy90YWIzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0U7RUFDRSxZQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC90YWIzL3RhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLkFwcCB7XG4gICAgaGVpZ2h0OiA0ODBweDtcbiAgICBwYWRkaW5nOiAxMHJlbTtcbiAgfVxuICAubGVhZmxldC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgfSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/tab3/tab3.page.ts":
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /*! exports provided: Tab3Page */

    /***/
    function srcAppTab3Tab3PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! leaflet */
      "./node_modules/leaflet/dist/leaflet-src.js");
      /* harmony import */


      var leaflet__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var _turf_boolean_intersects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @turf/boolean-intersects */
      "./node_modules/@turf/boolean-intersects/dist/es/index.js"); // import * as Leaflet from 'leaflet';


      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(http) {
          _classCallCheck(this, Tab3Page);

          this.http = http;
          var Functionone;
        } //  map = L.map('map').setView(L.latLng(32.302898, -90.183487), 11);
        //  group = L.layerGroup().addTo(this.map);


        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getLocationService();
            this.initializeMapOptions();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "getLocationService",
          value: function getLocationService() {
            var _this = this;

            return new Promise(function (resolve, reject) {
              navigator.geolocation.getCurrentPosition(function (resp) {
                resolve({
                  lng: resp.coords.longitude,
                  lat: resp.coords.latitude
                });
                _this.latitudeOne = resp.coords.latitude;
                _this.longitudeOne = resp.coords.longitude;
              });
            });
          } //MAYBE START STORING VALUES OF RESP.LAT/LNG AND USE FOR CHECKING LAYER THEN REMOVEING IN ONMAPREADY

        }, {
          key: "onMapReady",
          value: function onMapReady(map) {
            var _this2 = this;

            this.map = map;
            this.getLocationService().then(function (resp) {
              _this2.map.setView(leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](resp.lat, resp.lng), 18);
            });
            this.geoRadius(this.rangeId);
            this.getAlerts();
          } //MISSISSIPPI AREA

        }, {
          key: "initializeMapOptions",
          value: function initializeMapOptions() {
            this.mapOptions = {
              layers: [Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["tileLayer"])('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18,
                attribution: 'Map data © OpenStreetMap contributors'
              })],
              zoom: 18
            };
          } //UPDATING A MAP RADIUS USING BUTTONS IN ANGULAR
          //ANGULAR BUTTON 

        }, {
          key: "geoRadius",
          value: function geoRadius(value) {
            var _this3 = this;

            //BUTTON RADIUS: REMOVE PREVIOUS LAYER WHEN NEW BUTTON IS PRESSED
            //SLIDER RADIUS: LEARN HOW TO UPDATE A RADIUS IMMEDIATELY WHEN RADIUS SLIDER IS MOVED
            //ALSO HOW TO SAVE RADIUS VALUE.
            this.getLocationService().then(function (resp) {
              _this3.rangeId = value;
              var milesRadius = _this3.rangeId / 1609;

              if (_this3.rangeId === undefined) {
                _this3.geoRadiusLine = leaflet__WEBPACK_IMPORTED_MODULE_3__["circle"]([resp.lat, resp.lng], {
                  radius: 200
                }).addTo(_this3.map);
              } else if (_this3.rangeId > 0) {
                _this3.geoRadiusLine.setRadius(_this3.rangeId); //toGeoJSON is converting to a point instead of a POLYGON
                //Leaflet doesn't support converting Polygons
                //Need to find a plugin or replace the circle.


                console.log(_this3.geoRadiusLine);
                _this3.geoJSONCircle = _this3.circleToPolygon(_this3.geoRadiusLine);
                _this3.turfcircle = _this3.geoJSONCircle.toGeoJSON();
                console.log(_this3.turfcircle); // TEST TO EXTRACT POLYGON AND STORE 
                // https://medium.com/geoman-blog/how-to-handle-circles-in-geojson-d04dcd6cb2e6
                //
                //

                for (var i = 0; i < _this3.polygons.length; i++) {
                  var element = _this3.polygons[i];
                  var doesIntersect = Object(_turf_boolean_intersects__WEBPACK_IMPORTED_MODULE_4__["default"])(_this3.polygons[i].geometry, _this3.turfcircle.geometry);
                  console.log(_this3.polygons[i], _this3.turfcircle);
                  console.log(doesIntersect);

                  if (doesIntersect == true) {
                    console.log(element + "of ID = ".concat(i, " has an intersection!"));
                  }
                }
              }
            });
          }
        }, {
          key: "addSampleMarker",
          value: function addSampleMarker() {
            var _this4 = this;

            this.getLocationService().then(function (resp) {
              var marker = new leaflet__WEBPACK_IMPORTED_MODULE_3__["Marker"]([resp.lat, resp.lng]).setIcon(Object(leaflet__WEBPACK_IMPORTED_MODULE_3__["icon"])({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'assets/marker-icon.png'
              }));
              marker.addTo(_this4.map);
            });
          } //WEATHER POLOYON 

        }, {
          key: "getAlerts",
          value: function getAlerts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this5 = this;

              var poly, turfCircle, response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      poly = [];
                      response = this.http.get("https://api.weather.gov/alerts/active?area=LA").subscribe(function (json) {
                        console.log(json);
                        _this5.json = json;

                        for (var i = 0; i < _this5.json.features.length; i++) {
                          var element = _this5.json.features[i];
                          console.log(element);
                          poly.push(element);
                          _this5.polygons = poly;
                          console.log(_this5.polygons); //I NEED TO PARSE THE POLYGONS IN THE RESPONSE INTO POSITIOSN, PATHOPTIONS, KEY
                          //

                          var pressOne = leaflet__WEBPACK_IMPORTED_MODULE_3__["geoJSON"](element).addTo(_this5.map);
                          pressOne.bindPopup("<p>County Affected: ".concat(element.properties.areaDesc, "</p>\n            <p>Event: ").concat(element.properties.event, "</p>\n            "));
                        }
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } //FUNCTIONS FOR CONVERTING L.CIRCLE

        }, {
          key: "destinationVincenty",
          value: function destinationVincenty(lonlat, brng, dist) {
            var VincentyConstants = {
              a: 6378137,
              b: 6356752.3142,
              f: 1 / 298.257223563
            };
            var a = VincentyConstants.a,
                b = VincentyConstants.b,
                f = VincentyConstants.f;
            var lon1 = lonlat.lng;
            var lat1 = lonlat.lat;
            var s = dist;
            var pi = Math.PI;
            var alpha1 = brng * pi / 180; // converts brng degrees to radius

            var sinAlpha1 = Math.sin(alpha1);
            var cosAlpha1 = Math.cos(alpha1);
            var tanU1 = (1 - f) * Math.tan(lat1 * pi / 180
            /* converts lat1 degrees to radius */
            );
            var cosU1 = 1 / Math.sqrt(1 + tanU1 * tanU1);
            var sinU1 = tanU1 * cosU1;
            var sigma1 = Math.atan2(tanU1, cosAlpha1);
            var sinAlpha = cosU1 * sinAlpha1;
            var cosSqAlpha = 1 - sinAlpha * sinAlpha;
            var uSq = cosSqAlpha * (a * a - b * b) / (b * b);
            var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 * uSq)));
            var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
            var sigma = s / (b * A);
            var sigmaP = 2 * Math.PI;
            var cos2SigmaM;
            var sinSigma;
            var cosSigma;

            while (Math.abs(sigma - sigmaP) > 1e-12) {
              cos2SigmaM = Math.cos(2 * sigma1 + sigma);
              sinSigma = Math.sin(sigma);
              cosSigma = Math.cos(sigma);
              var deltaSigma = B * sinSigma * (cos2SigmaM + B / 4 * (cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM) - B / 6 * cos2SigmaM * (-3 + 4 * sinSigma * sinSigma) * (-3 + 4 * cos2SigmaM * cos2SigmaM)));
              sigmaP = sigma;
              sigma = s / (b * A) + deltaSigma;
            }

            var tmp = sinU1 * sinSigma - cosU1 * cosSigma * cosAlpha1;
            var lat2 = Math.atan2(sinU1 * cosSigma + cosU1 * sinSigma * cosAlpha1, (1 - f) * Math.sqrt(sinAlpha * sinAlpha + tmp * tmp));
            var lambda = Math.atan2(sinSigma * sinAlpha1, cosU1 * cosSigma - sinU1 * sinSigma * cosAlpha1);
            var C = f / 16 * cosSqAlpha * (4 + f * (4 - 3 * cosSqAlpha));
            var lam = lambda - (1 - C) * f * sinAlpha * (sigma + C * sinSigma * (cos2SigmaM + C * cosSigma * (-1 + 2 * cos2SigmaM * cos2SigmaM))); // const revAz = Math.atan2(sinAlpha, -tmp);  // final bearing

            var lamFunc = lon1 + lam * 180 / pi; // converts lam radius to degrees

            var lat2a = lat2 * 180 / pi; // converts lat2a radius to degrees

            return leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](lamFunc, lat2a);
          }
        }, {
          key: "createGeodesicPolygon",
          value: function createGeodesicPolygon(origin, radius, sides, rotation) {
            var angle;
            var newLonlat;
            var geomPoint;
            var points = [];

            for (var i = 0; i < sides; i += 1) {
              angle = i * 360 / sides + rotation;
              newLonlat = this.destinationVincenty(origin, angle, radius);
              geomPoint = leaflet__WEBPACK_IMPORTED_MODULE_3__["latLng"](newLonlat.lng, newLonlat.lat);
              points.push(geomPoint);
            }

            return points;
          }
        }, {
          key: "circleToPolygon",
          value: function circleToPolygon(circle) {
            var sides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
            var origin = circle.getLatLng();
            var radius = circle.getRadius();
            var polys = this.createGeodesicPolygon(origin, radius, sides, 0); // these are the points that make up the circle

            var polygon = [];

            for (var i = 0; i < polys.length; i += 1) {
              var geometry = [polys[i].lat, polys[i].lng];
              polygon.push(geometry);
            }

            return leaflet__WEBPACK_IMPORTED_MODULE_3__["polygon"](polygon, circle.options);
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      Tab3Page.propDecorators = {
        tab3Page: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['ranger']
        }]
      };
      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tab3.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tab3.page.scss */
        "./src/app/tab3/tab3.page.scss"))["default"]]
      }) //I NEED TO GET RADIUS TO SHOW
      //NEED TO Get current location to set view in leaflet in angular
      //I have current location how do i send it as a variable outside ngOnInit or alternative
      //update noaa warnings if bad weather near by.
      //also fix puzzle pieced map on load
      ], Tab3Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map