/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)) || f % 10 === 1 && !(f % 100 === 11))
        return 1;
    if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)) || f % 10 === Math.floor(f % 10) && (f % 10 >= 2 && f % 10 <= 4) && !(f % 100 >= 12 && f % 100 <= 14))
        return 3;
    return 5;
}
export default ["bs", [["prijepodne", "popodne"], ["AM", "PM"], ["prijepodne", "popodne"]], u, [["N", "P", "U", "S", "Č", "P", "S"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"], ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"]], [["n", "p", "u", "s", "č", "p", "s"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"], ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"]], [["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], ["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"]], u, [["p.n.e.", "n. e."], ["p. n. e.", "n. e."], ["prije nove ere", "nove ere"]], 1, [6, 0], ["d. M. y.", "d. MMM y.", "d. MMMM y.", "EEEE, d. MMMM y."], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, "{1} 'u' {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "BAM", "KM", "Bosanskohercegovačka konvertibilna marka", { "AUD": [u, "$"], "BAM": ["KM"], "BRL": [u, "R$"], "BYN": [u, "р."], "CAD": [u, "$"], "CNY": [u, "¥"], "GBP": [u, "£"], "HKD": [u, "$"], "HRK": ["kn"], "ILS": [u, "₪"], "MXN": [u, "$"], "NZD": [u, "$"], "PHP": [u, "₱"], "RSD": ["din."], "THB": ["฿"], "TWD": ["NT$"], "USD": [u, "$"], "XCD": [u, "$"], "XPF": [] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9icy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCwwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0FBRXBCLFNBQVMsTUFBTSxDQUFDLEdBQVc7SUFDM0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWpLLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ25GLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7UUFDck4sT0FBTyxDQUFDLENBQUM7SUFDYixPQUFPLENBQUMsQ0FBQztBQUNULENBQUM7QUFFRCxlQUFlLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxZQUFZLEVBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxZQUFZLEVBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxRQUFRLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxNQUFNLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxVQUFVLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsUUFBUSxFQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLE9BQU8sQ0FBQyxFQUFDLENBQUMsZ0JBQWdCLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxrQkFBa0IsQ0FBQyxFQUFDLENBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsZUFBZSxDQUFDLEVBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxXQUFXLEVBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsSUFBSSxFQUFDLDBDQUEwQyxFQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRlkuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwodmFsOiBudW1iZXIpOiBudW1iZXIge1xuY29uc3QgbiA9IHZhbCwgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnModmFsKSksIHYgPSB2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aCwgZiA9IHBhcnNlSW50KHZhbC50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuXG5pZiAodiA9PT0gMCAmJiAoaSAlIDEwID09PSAxICYmICEoaSAlIDEwMCA9PT0gMTEpKSB8fCBmICUgMTAgPT09IDEgJiYgIShmICUgMTAwID09PSAxMSkpXG4gICAgcmV0dXJuIDE7XG5pZiAodiA9PT0gMCAmJiAoaSAlIDEwID09PSBNYXRoLmZsb29yKGkgJSAxMCkgJiYgKGkgJSAxMCA+PSAyICYmIGkgJSAxMCA8PSA0KSAmJiAhKGkgJSAxMDAgPj0gMTIgJiYgaSAlIDEwMCA8PSAxNCkpIHx8IGYgJSAxMCA9PT0gTWF0aC5mbG9vcihmICUgMTApICYmIChmICUgMTAgPj0gMiAmJiBmICUgMTAgPD0gNCkgJiYgIShmICUgMTAwID49IDEyICYmIGYgJSAxMDAgPD0gMTQpKVxuICAgIHJldHVybiAzO1xucmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcImJzXCIsW1tcInByaWplcG9kbmVcIixcInBvcG9kbmVcIl0sW1wiQU1cIixcIlBNXCJdLFtcInByaWplcG9kbmVcIixcInBvcG9kbmVcIl1dLHUsW1tcIk5cIixcIlBcIixcIlVcIixcIlNcIixcIsSMXCIsXCJQXCIsXCJTXCJdLFtcIm5lZFwiLFwicG9uXCIsXCJ1dG9cIixcInNyaVwiLFwixI1ldFwiLFwicGV0XCIsXCJzdWJcIl0sW1wibmVkamVsamFcIixcInBvbmVkamVsamFrXCIsXCJ1dG9yYWtcIixcInNyaWplZGFcIixcIsSNZXR2cnRha1wiLFwicGV0YWtcIixcInN1Ym90YVwiXSxbXCJuZWRcIixcInBvblwiLFwidXRvXCIsXCJzcmlcIixcIsSNZXRcIixcInBldFwiLFwic3ViXCJdXSxbW1wiblwiLFwicFwiLFwidVwiLFwic1wiLFwixI1cIixcInBcIixcInNcIl0sW1wibmVkXCIsXCJwb25cIixcInV0b1wiLFwic3JpXCIsXCLEjWV0XCIsXCJwZXRcIixcInN1YlwiXSxbXCJuZWRqZWxqYVwiLFwicG9uZWRqZWxqYWtcIixcInV0b3Jha1wiLFwic3JpamVkYVwiLFwixI1ldHZydGFrXCIsXCJwZXRha1wiLFwic3Vib3RhXCJdLFtcIm5lZFwiLFwicG9uXCIsXCJ1dG9cIixcInNyaVwiLFwixI1ldFwiLFwicGV0XCIsXCJzdWJcIl1dLFtbXCJqXCIsXCJmXCIsXCJtXCIsXCJhXCIsXCJtXCIsXCJqXCIsXCJqXCIsXCJhXCIsXCJzXCIsXCJvXCIsXCJuXCIsXCJkXCJdLFtcImphblwiLFwiZmViXCIsXCJtYXJcIixcImFwclwiLFwibWFqXCIsXCJqdW5cIixcImp1bFwiLFwiYXVnXCIsXCJzZXBcIixcIm9rdFwiLFwibm92XCIsXCJkZWNcIl0sW1wiamFudWFyXCIsXCJmZWJydWFyXCIsXCJtYXJ0XCIsXCJhcHJpbFwiLFwibWFqXCIsXCJqdW5pXCIsXCJqdWxpXCIsXCJhdWd1c3RcIixcInNlcHRlbWJhclwiLFwib2t0b2JhclwiLFwibm92ZW1iYXJcIixcImRlY2VtYmFyXCJdXSx1LFtbXCJwLm4uZS5cIixcIm4uIGUuXCJdLFtcInAuIG4uIGUuXCIsXCJuLiBlLlwiXSxbXCJwcmlqZSBub3ZlIGVyZVwiLFwibm92ZSBlcmVcIl1dLDEsWzYsMF0sW1wiZC4gTS4geS5cIixcImQuIE1NTSB5LlwiLFwiZC4gTU1NTSB5LlwiLFwiRUVFRSwgZC4gTU1NTSB5LlwiXSxbXCJISDptbVwiLFwiSEg6bW06c3NcIixcIkhIOm1tOnNzIHpcIixcIkhIOm1tOnNzIHp6enpcIl0sW1wiezF9IHswfVwiLHUsXCJ7MX0gJ3UnIHswfVwiLHVdLFtcIixcIixcIi5cIixcIjtcIixcIiVcIixcIitcIixcIi1cIixcIkVcIixcIsOXXCIsXCLigLBcIixcIuKInlwiLFwiTmFOXCIsXCI6XCJdLFtcIiMsIyMwLiMjI1wiLFwiIywjIzDCoCVcIixcIiMsIyMwLjAwwqDCpFwiLFwiI0UwXCJdLFwiQkFNXCIsXCJLTVwiLFwiQm9zYW5za29oZXJjZWdvdmHEjWthIGtvbnZlcnRpYmlsbmEgbWFya2FcIix7XCJBVURcIjpbdSxcIiRcIl0sXCJCQU1cIjpbXCJLTVwiXSxcIkJSTFwiOlt1LFwiUiRcIl0sXCJCWU5cIjpbdSxcItGALlwiXSxcIkNBRFwiOlt1LFwiJFwiXSxcIkNOWVwiOlt1LFwiwqVcIl0sXCJHQlBcIjpbdSxcIsKjXCJdLFwiSEtEXCI6W3UsXCIkXCJdLFwiSFJLXCI6W1wia25cIl0sXCJJTFNcIjpbdSxcIuKCqlwiXSxcIk1YTlwiOlt1LFwiJFwiXSxcIk5aRFwiOlt1LFwiJFwiXSxcIlBIUFwiOlt1LFwi4oKxXCJdLFwiUlNEXCI6W1wiZGluLlwiXSxcIlRIQlwiOltcIuC4v1wiXSxcIlRXRFwiOltcIk5UJFwiXSxcIlVTRFwiOlt1LFwiJFwiXSxcIlhDRFwiOlt1LFwiJFwiXSxcIlhQRlwiOltdfSxcImx0clwiLCBwbHVyYWxdO1xuIl19