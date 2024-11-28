const races = ["white", "black", "asian", "latino hispanic"]; // Adjusted to exclude "indian" and "middle eastern"

const processData = (data) => {
    const occupationData = {};
    const totalNumProcessed = data.length;
    occupationData[`Total # People Processed`] = totalNumProcessed;

    const femaleCount = data.filter(person => person.dominant_gender === "Woman").length;
    occupationData[`% Female`] = `(${femaleCount}/${totalNumProcessed}) = ${((femaleCount / totalNumProcessed) * 100).toFixed(2)}%`;

    races.forEach((race) => {
        // Map race to include "Indian" under "Asian" and "Middle Eastern" under "White"
        const raceCount = data.filter(person => {
            if (race === "asian") {
                return person.dominant_race === "asian" || person.dominant_race === "indian";
            } else if (race === "white") {
                return person.dominant_race === "white" || person.dominant_race === "middle eastern";
            } else {
                return person.dominant_race === race;
            }
        }).length;

        const formattedRaceKey = race
            .split(/[\s-]/)
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(" ");

        occupationData[`% ${formattedRaceKey}`] = `(${raceCount}/${totalNumProcessed}) = ${((raceCount / totalNumProcessed) * 100).toFixed(2)}%`;
    });

    return occupationData;
}
module.exports = { processData };