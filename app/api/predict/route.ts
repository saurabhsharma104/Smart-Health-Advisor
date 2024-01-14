import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { term } = req.query;

  try {
    // const response = await fetch(`https://en.wikipedia.org/w/api.php?action=parse&format=json&section=0&page=${term}&origin=*`);
    // const data = await response.json();

    // const content = data.parse.text['*'];
    // const doc = new DOMParser().parseFromString(content, 'text/html');
    // const infoTable = doc.querySelector('.infobox');

    // if (infoTable) {
    //   const rows = infoTable.querySelectorAll('tr');
    //   let output = `<strong>${term}</strong><br>`;

    //   rows.forEach((row) => {
    //     const th = row.querySelector('th');
    //     const td = row.querySelector('td');

    //     if (th && td) {
    //       let symptomData = td.innerHTML.replace(/<\/?[^>]+(>|$)/g, "");
    //       symptomData = symptomData.replace('.', '');
    //       symptomData = symptomData.replace(';', ',');
    //       symptomData = symptomData.replace(/<b>/g, '<b> \n');
    //       symptomData = symptomData.replace(/<a.*?>/g, '');
    //       symptomData = symptomData.replace(/<\/a>/g, '');
    //       symptomData = symptomData.replace(/<[^<]+?>/g, ' ');
    //       symptomData = symptomData.replace(/\[.*\]/g, '');
    //       symptomData = symptomData.replace(/&gt/g, '>');

    //       output += `${th.innerText.trim()} - ${symptomData}<br>`;
    //     }
    //   });

    //   res.status(200).json({ output });
    // } else {
    //   res.status(404).json({ error: `No information found for ${term}` });
    // }
  } catch (error) {
    res.status(500).json({ error: 'Server Error!' });
  }
};

// pages/api/getDiseaseInfo.ts


