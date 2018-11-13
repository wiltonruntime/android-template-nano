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
    "myapp/common/backendcall",
    "myapp/common/store/checkActionError"
], function(backendcall) {
    "use strict";

    return function(context) {
        backendcall({
            module: "myapp/android",
            func: "killCurrentProcess"
        }, function(err) {
            if(checkActionError(err)) return;
        });
    };
});

