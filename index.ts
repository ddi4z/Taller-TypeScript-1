import { series } from './data.js';

const table: HTMLElement | null = document.querySelector('.table tbody');

if (table) {
    series.forEach((serie) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">${serie.id}</th>
            <td class="show-card">${serie.name}</td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        table.appendChild(row);
    });
} else {
    console.error("No se encontró el elemento con la clase 'table'");
}

const summary: HTMLElement | null = document.querySelector('p');

if (summary) {
    let avgSeasons = 0;
    series.forEach((serie) => {
        avgSeasons += serie.seasons/series.length;
    });
    summary.innerHTML = `Seasons average: ${avgSeasons}`;
} else {
    console.error("No se encontró el elemento con la etiqueta 'p'");
}