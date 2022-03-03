async function main() {

  // get the CSV data from Google Sheets
  const csvUrl = "https://docs.google.com/spreadsheets/d/1kGScdU9df7T2QS9RnM_qvciT04Y1tmBiGVH-XD1E4l0/gviz/tq?tqx=out:csv&sheet=Browsertrix";
  const resp = await fetch(csvUrl);
  const csv = await resp.text()
  const reader = new CSVKit.ObjectReader()
  reader.parse(csv)

  // create a table with links to the ReplayWeb.page viewer
  const section = document.getElementById("archives");
  const table = document.createElement("table");
  const hdr = document.createElement("tr");
  addCell(hdr, "Title", "th");
  addCell(hdr, "URL", "th");
  addCell(hdr, "Description", "th");
  addCell(hdr, "WACZ", "th");
  table.appendChild(hdr);

  for (const row of reader.rows) {

    // only display information for archives that have a WACZ URL
    if (row["WACZ File URL"] && row["WACZ File URL"].match(/^http/)) {
      const title = row["Collection Name"];
      const desc = row["Description"];
      const waczUrl = row["WACZ File URL"];
      const websiteUrl = row["Collection URL"];
      
      const tr = document.createElement("tr");
      addCell(tr, title);
      addCell(tr, websiteUrl);
      addCell(tr, desc);

      // create the link the WACZ viewer
      const link = document.createElement("a");
      link.href = `https://replayweb.page/?source=${waczUrl}#view=pages&url=${websiteUrl}`;
      const img = document.createElement("img");
      img.src = "/assets/images/wacz.png";
      img.title = "View Archive";
      link.appendChild(img);
      addCell(tr, link);

      // add the row
      table.appendChild(tr);
    }
  }
  section.appendChild(table);
}

function addCell(tr, content, el="td") {
  const td = document.createElement(el)
  if (typeof(content) == "string") {
    td.textContent = content;
  } else {
    td.appendChild(content);
  }
  tr.appendChild(td);
}

main()
