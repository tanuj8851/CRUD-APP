// Problem 1. complete the below function
function school(schoolName, location, established, ...subjects) {
    let obj = {
        name: `${schoolName}`,
        location: `${location}`,
        established: `${established}`,
        subjects: `${subjects+" "}`,
        getGeneralInfo: () => {
            let x = `${schoolName} was established in ${established} at ${location}.`
            return x;
        },
        getSubjectsInfo: () => {
            let y = `At ${schoolName} we teach ${subjects} .`
            return y;
        }

    };

    return obj;
}
// "At ABC School we teach English, Hindi, Mathematics."


// Problem 2.
let categoriesDirectory = {
    3: "Dessert",
    1: "MainCourse",
    2: "Starter"
};

let areas = [
    { id: 1, name: "British" },
    { id: 2, name: "Malaysian" }
];

let areasDirectory = areas.reduce((acc, item) => {
    acc[item.id] = item.name;
    return acc;
}, {});

let inputArray = [{
        idMeal: "52768",
        strMeal: "Apple Frangipan Tart",
        Category: 3,
        Area: 1,
    },

    {
        idMeal: "53049",
        strMeal: "Apam balik",
        Category: 3,
        Area: 2,
    },
    {
        idMeal: "52767",
        strMeal: "Bakewell tart",
        Category: 3,
        Area: 1,
    }
];

// let outputArray = ['Your solution here.']
let outputArray = inputArray.reduce((acc, item) => {
        // acc.push();
        let obj = {};
        obj["productId"] = item.idMeal;
        obj["productTitle"] = item.strMeal;
        // obj["Category"]=item.Category;


        for (let key in categoriesDirectory) {
            if (key == item.Category) {
                obj["Category"] = categoriesDirectory[key];
            }
        }
        for (let i = 0; i < areas.length; i++) {
            if (areas[i].id == item.Area) {
                obj["Area"] = areas[i].name;
            }
        }





        acc.push(obj);
        return acc;
    }, [])
    // console.log(outputArray)

export { inputArray, outputArray, school, categoriesDirectory, areas, areasDirectory };