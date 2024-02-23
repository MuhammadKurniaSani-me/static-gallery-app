import {  } from "../../src/javascripts/";
/**
 *
 *
 *
 */
function sumVolume(length = 15, width = 15, height = 15) {
    return length + width + height;
}

function minBagPrice() {
    return 3300;
}

function addPlipitSewed() {
    return 2000;
}

function addZipper() {
    return 2000;
}

function addAdhesive() {
    return 250;
}

function add100gsmFabric(volume) {
    if (volume > 80) {
        return 2500;
    }

    return 2000;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calcVolumeBagPrice(volume) {
    const priceReference = 5700;
    const volumeReference = 80;

    let deltaVolume = volumeReference - volume;

    return getRndInteger(700, 900) + (priceReference - deltaVolume * 100);
}

/**
 *
 *
 *
 */
function calcSideBag(numOfSide = 1) {
    const PriceAdditionalSide = 500;

    return (numOfSide - 1) * PriceAdditionalSide;
}

/**
 *
 *
 *
 */
function calcColorBag(numOfColor = 1) {
    const PriceAdditionalSide = 500;

    return (numOfColor - 1) * PriceAdditionalSide;
}

/**
 *
 *
 *
 */
function calcPriceSideAndColorBag(numOfSide = 1, numOfColor = 1) {
    if (numOfSide === 1 && numOfColor === 1) {
        return "Gratis tanpa biaya tambahan";
    }

    let sideBagPrice = calcSideBag(numOfSide);
    let colorBagPrice = calcColorBag(numOfColor);

    return sideBagPrice + numOfSide * colorBagPrice;
}

function calcBagPrice(
    length = 15,
    width = 15,
    height = 15,
    addColors = 1,
    addSides = 1,
    useZipper = false,
    useAdhesive = false,
    use100gsmFabric = false,
    usePlipitSewed = false
) {
    let currentPrice = 0;
    let volume = sumVolume(length, width, height);

    if (volume <= 45 || (length <= 15 && width <= 15 && height <= 15)) {
        return minBagPrice();
    } else if (volume === 80) {
        currentPrice += 5700;
    } else {
        currentPrice += calcVolumeBagPrice(volume);
    }

    if (addColors > 1 || addSides > 1) {
        currentPrice += calcPriceSideAndColorBag(addColors, addSides);
    }

    if (useAdhesive) {
        currentPrice += addAdhesive();
    }

    if (use100gsmFabric) {
        currentPrice += add100gsmFabric();
    }

    if (useZipper) {
        currentPrice += addZipper();
    }

    if (usePlipitSewed) {
        currentPrice += addPlipitSewed();
    }

    return Math.ceil(currentPrice);
}

// ukuran P16xT16xT16 2 Sisi 2 Warna
// console.log(calcBagPrice(16,16,16,2,2))

// ukuran P17xT17xT17
// console.log(calcBagPrice(17,17,17))

// ukuran P18xT18xT18
// console.log(calcBagPrice(18,18,18))

// ukuran P19xT19xT19
// console.log(calcBagPrice(19,19,19))

// ukuran P20xT20xL20 2 Sisi & 2 Warna
// console.log(calcBagPrice(20,20,20,2,2))

/**
 * ukuran P40xT30xT10
 * 2 sisi 2 warna
 * tambah perekat
 * tambah resleting
 * 100gsm
 * jahitan plipit
 */
// console.log(calcBagPrice(40,30,10,2,2,true,true,true,true))


/**
 * Bag Width
 */
// set the target element of the input field
const $bagWidth = parseInt(document.getElementById("bag-width-input").value);

// optionally set the increment and decrement elements
const $incrementBagWidth = document.getElementById("increment-bag-width-button");

const $decrementBagWidth = document.getElementById("decrement-bag-width-button");


/**
 * Bag Height
 */
// set the target element of the input field
const $bagHeight = parseInt(document.getElementById("bag-height-input").value);

// optionally set the increment and decrement elements
const $incrementBagHeight = document.getElementById("increment-bag-height-button");

const $decrementBagHeight = document.getElementById("decrement-bag-height-button");


/**
 * Bag length
 */
// set the target element of the input field
const $bagLength = parseInt(document.getElementById("bag-length-input").value);

// optionally set the increment and decrement elements
const $incrementBagLength = document.getElementById("increment-bag-length-button");

const $decrementBagLength = document.getElementById("decrement-bag-length-button");


/**
 * Side Bag
 */
// set the target element of the input field
const $sideBag = parseInt(document.getElementById("bag-side-input").value);

// optionally set the increment and decrement elements
const $incrementSideBag = document.getElementById("increment-bag-side-button");

const $decrementSideBag = document.getElementById("decrement-bag-side-button");


/**
 * Print Color-input
 */
// set the target element of the input field
const $colorBag = parseInt(document.getElementById("print-color-input").value);

// optionally set the increment and decrement elements
const $incrementColorBag = document.getElementById("increment-color-bag-button");

const $decrementColorBag = document.getElementById("decrement-color-bag-button");


// optional options with default values and callback functions
// const options = {
//     minValue: 1,
//     maxValue: null, // infinite
//     onIncrement: () => {
//         console.log("input field value has been incremented");
//     },
//     onDecrement: () => {
//         console.log("input field value has been decremented");
//     },
// };

// const instanceOptions = {
//     id: "counter-input-example",
//     override: true,
// };

/*
 * $targetEl: required
 * $incrementEl: optional
 * $decrementEl: optional
 * options: optional
 */
// const counterInput = new InputCounter(
//     $bagWidth,
//     $bagHeight,
//     $bagLength,
//     $sideBag,
//     $colorBag,
//     // options,
//     // instanceOptions
// );

// // get the current value of the input field
// counterInput.getCurrentValue();
$incrementBagWidth.addEventListener("click", () => {
    console.log($bagWidth+1);
});
$decrementBagWidth.addEventListener("click", () => {
    console.log($bagWidth-1);
});

// // increment the value of the input field
// counterInput.increment();

// // decrement the value of the input field
// counterInput.decrement();
