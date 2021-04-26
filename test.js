function errGener(err) {
    throw new Error(err)
}
try {
    errGener("access denied")
    console.log("not error")
} catch (err) {
    console.log("yes errror: "+err)
}