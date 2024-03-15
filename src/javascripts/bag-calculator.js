class BagCalculator{
    constructor(previousPriceTextElement, currentPriceTextElement) {
        this.previousPriceTextElement = previousPriceTextElement;
        this.currentPriceTextElement = currentPriceTextElement;
        this.clear();
    }

    updatePrice() {
        this.currentPriceTextElement.innerText = `Total Harga ${new Intl.NumberFormat("id-ID", {style: "currency", currency: "IDR"}).format(this.currentPrice)}`;
    }

    clear() {
        this.currentPrice = this.previousPriceTextElement;
    }

    addZipper(bagPrice) {
        this.currentPrice += 2000;
    }
    
    removeZipper(bagPrice) {
        this.currentPrice -= 2000;
    }
    
    addAdhesive() {
        this.currentPrice += 250;
    }

    removeAdhesive(bagPrice) {
        this.currentPrice -= 250;
    }

    add100gsmFabric() {
        this.currentPrice += 2000;
    }

    remove100gsmFabri(bagPrice) {
        this.currentPrice -= 2000;
    }

    addPlipitSewed() {
        this.currentPrice += 2000;
    }

    removePlipitSewed(bagPrice) {
        this.currentPrice -= 2000;
    }
}

const priceOutput = document.querySelector("[data-price-output]");


/**
 * bag width
 *
 */
const incrementBagWidth = document.querySelector("#increment-bag-width-button");

const decrementBagWidth = document.querySelector("#decrement-bag-width-button");

// set the target element of the input field
const $bagWidth = parseInt(document.getElementById("bag-width-input").value);


/**
 * bag length
 *
 */
const incrementBagLength = document.querySelector("#increment-bag-length-button");

const decrementBagLength = document.querySelector("#decrement-bag-length-button");

const $bagLength = parseInt(document.getElementById("bag-length-input").value);


/**
 * bag height
 *
 */
const incrementBagHeight = document.querySelector("#increment-bag-height-button");

const decrementBagHeight = document.querySelector("#decrement-bag-height-button");

// set the target element of the input field
const $bagHeight = parseInt(document.getElementById("bag-height-input").value);


/**
 * bag color
 *
 */
const incrementBagColor = document.querySelector("#increment-color-bag-button");

const decrementBagColor = document.querySelector("#decrement-color-bag-button");

// set the target element of the input field
const $bagcolor = parseInt(document.getElementById("print-color-input").value);


/**
 * bag side
 *
 */
const incrementBagSide = document.querySelector("#increment-side-bag-button");

const decrementBagSide = document.querySelector("#decrement-side-bag-button");

// set the target element of the input field
const bagSide = parseInt(document.getElementById("bag-side-input").value);


/**
 * additional bag specs
 *
 */
const useZipperEl = document.getElementById("add-zipper");

const useAdhesiveEl = document.getElementById("add-adhesive");

const use100gsmFabricEl = document.getElementById("add-100gsm-fabric");

const usePlipitSewedEl = document.getElementById("add-plipit-sewed");


// reset bag spec
const resetBagSpecButton = document.getElementById("reset-bag-spec");


// set the target element of the input field
const bagColor = parseInt(document.getElementById("print-color-input").value);

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
    "[data-previous-operand]"
);


/**
 *
 *
 */


function minBagPrice() {
    return 3500;
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

function sumVolume(length = 15, width = 15, height = 15) {
    return length + width + height;
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

function calcSideBag(numOfSide = 1) {
    const PriceAdditionalSide = 500;

    return (numOfSide - 1) * PriceAdditionalSide;
}

function calcColorBag(numOfColor = 1) {
    const PriceAdditionalSide = 500;

    return (numOfColor - 1) * PriceAdditionalSide;
}

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


const bagPrice = new BagCalculator(minBagPrice(), priceOutput);

useZipperEl.addEventListener("click", (button) => {
    if (useZipperEl.checked) {
        bagPrice.addZipper();
        bagPrice.updatePrice();
        return
    } 
    bagPrice.removeZipper();
    bagPrice.updatePrice();
});

useAdhesiveEl.addEventListener("click", (button) => {
    if (useAdhesiveEl.checked) {
        bagPrice.addAdhesive();
        bagPrice.updatePrice();
        return
    } 
    bagPrice.removeAdhesive();
    bagPrice.updatePrice();
});

usePlipitSewedEl.addEventListener("click", (button) => {
    if (usePlipitSewedEl.checked) {
        bagPrice.addPlipitSewed();
        bagPrice.updatePrice();
        return
    } 
    bagPrice.removePlipitSewed();
    bagPrice.updatePrice();
});

use100gsmFabricEl.addEventListener("click", (button) => {
    if (use100gsmFabricEl.checked) {
        bagPrice.add100gsmFabric();
        bagPrice.updatePrice();
        return
    } 
    bagPrice.remove100gsmFabri();
    bagPrice.updatePrice();
});

resetBagSpecButton.addEventListener("click", (button) => {
    bagPrice.clear();
    bagPrice.updatePrice();
})
