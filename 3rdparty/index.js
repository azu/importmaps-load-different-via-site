console.log("load entry");
console.log("load 3rdparty-for-web for each website");
try {
    await import("3rdparty-for-web")
    console.log("load 3rdparty-for-web for each website success");
} catch (e) {
    console.error("load 3rdparty-for-web for each website failed");
}
