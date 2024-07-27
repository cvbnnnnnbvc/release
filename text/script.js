function stringToBinary(input_string) {
    return Array.from(input_string).map(char => char.charCodeAt(0).toString(2)).join(' ');
}

function binaryToString(binary_string) {
    return binary_string.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');
}

function encryptText(text) {
    const binaryString = stringToBinary(text);
    const zeroWidth1 = '\u2060';
    const zeroWidth0 = '\u200C';
    return binaryString.replace(/1/g, zeroWidth1).replace(/0/g, zeroWidth0);
}

function decryptText(text) {
    const zeroWidth1 = '\u2060';
    const zeroWidth0 = '\u200C';
    const binaryString = text.replace(new RegExp(zeroWidth1, 'g'), '1').replace(new RegExp(zeroWidth0, 'g'), '0');
    return binaryToString(binaryString);
}

// 获取并加密指定 ID 的元素的文本
function processTextElements() {
    const t1Element = document.getElementById('t1');
    const t2Element = document.getElementById('t2');

    if (t1Element) {
        const t1Text = t1Element.textContent;
        t1Element.textContent = encryptText(t1Text);
    }

    if (t2Element) {
        const t2Text = t2Element.textContent;
        t2Element.textContent = decryptText(t2Text);
    }
}

// 当页面加载完成后，处理文本内容
window.onload = processTextElements;
