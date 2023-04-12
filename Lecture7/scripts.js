// first way
function ApiCall1() {
    const response = fetch('https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json');
    response.then((res) => {
        return res.json();
    }).then((json) => {
        debugger;
    })
}

//second way
async function ApiCall2() {
    let response = await fetch('https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json');
    var data = await response.json();
    debugger;
}

// third way ( mixed )
async function ApiCall3() {
    let response = await fetch('https://raw.githubusercontent.com/mdn/learning-area/main/javascript/apis/fetching-data/can-store/products.json');
    var data = await response.json();
    return data;
}
ApiCall3().then(res => {
    debugger
});

ApiCall1();
ApiCall2();
ApiCall3();