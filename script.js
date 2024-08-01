function calculateRequiredClasses() {
    const totalClasses = parseFloat(document.getElementById('total-classes').value);
    const presentClasses = parseFloat(document.getElementById('present-classes').value);
    if (isNaN(totalClasses) || isNaN(presentClasses)) {
        alert("Please enter valid numbers for Total Classes and Present Classes.");
        return;
    }
    const requiredClasses = 3 * totalClasses - 4 * presentClasses;
    const result = Math.max(requiredClasses, 0); // Ensuring the result is not negative
    document.getElementById('result').innerHTML = `You need to attend <strong>${result.toFixed(2)}</strong> more classes to achieve 75% attendance.`;
}
