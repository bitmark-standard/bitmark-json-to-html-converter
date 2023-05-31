#!/usr/bin/env node

/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

const { Application } = require("bitandblack-console/src/Application");
const { JSONConvertCommand } = require("../src/Commands/JSONConvertCommand");

const application = new Application("<info>bitmark JSON</info> to <info>HTML</info> converter.");
application
    .addCommand(new JSONConvertCommand())
    .run()
;