load("//tools:defaults.bzl", "protractor_web_test_suite")

def e2e_test_suite(name, data = [], tags = ["e2e"], deps = []):
    protractor_web_test_suite(
        name = name,
        configuration = "//src/e2e-app-ion:protractor.conf.js",
        data = [
            "//tools/axe-protractor",
            "@npm//:node_modules/@angular/bazel/src/protractor/utils/index.js",
        ] + data,
        on_prepare = "//src/e2e-app-ion:start-devserver.js",
        server = "//src/e2e-app-ion:devserver",
        tags = tags,
        deps = deps,
    )
