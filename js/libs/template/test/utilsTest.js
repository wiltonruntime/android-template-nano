/*
 * Copyright 2018, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

define([
    "./assert",
    "template/utils/listProperties",
    "template/utils/checkProperties",
    "template/utils/shortModuleId",
    "template/utils/formatError"
], function(assert, listProperties, checkProperties, shortModuleId, formatError) {
    "use strict";

    print("test: utils");

    var obj = {
        foo: "bar",
        baz: 42
    };

    // listProperties
    assert.equal(listProperties(obj), ["foo", "baz"]);

    // checkProperties
    checkProperties(obj, ["foo", "baz"]);
    assert.throws(function() { checkProperties(null, null); });
    assert.throws(function() { checkProperties(obj, null); });
    assert.throws(function() { checkProperties(obj, ["foo", "fail"]); });

    // shortId
    assert.equal("bar", shortModuleId({id: "foo/baz/bar"}));
    assert.equal("bar", shortModuleId({id: "bar"}));

    // formatError
    assert(formatError(new Error("foo")).length > 0);
});
