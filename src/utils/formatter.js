export function formatLabel(statName) {
    return statName
        .replace(/([A-Z])/g, " $1") // Insert space before capital letters
        .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
}