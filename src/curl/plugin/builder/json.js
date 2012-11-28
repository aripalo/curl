/** MIT License (c) copyright B Cavalier & J Hann */

/**
 * curl json! builder plugin
 */
define(['./jsEncode'], function (jsEncode) {

	return {

		normalize: function (resourceId, toAbsId) {
			// passthru
			return toAbsId(resourceId);
		},

		compile: function (absId, req, io, config) {
			// TODO:
			// validate with JSON.parse if config.strictJSONParse
			io.read(
				absId,
				function (source) {
					if (config.strictJSONParse) {
						try { JSON.parse(source); } catch (ex) { io.error(ex); }
					}
					// write-out define(id,function(){return{/* json here */}});
					source = 'define("'
						+ absId
						+ '", function () { return '
						+ source
						+ '; });';
					io.write(source);
				},
				io.error
			);
		}
	};

});
