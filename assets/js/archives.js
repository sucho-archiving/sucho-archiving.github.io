async function main() {

  // Get the CSV data from Google Sheets (needs to be the first sheet)
  const csvUrl = "https://docs.google.com/spreadsheets/d/1zcrfKnuyG2VOGLvhfxPLiwBlUtGbf8ZzObuJyWkZW9k/export?format=csv";
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
  addCell(hdr, "View", "th");
  table.appendChild(hdr);

  for (const row of reader.rows) {

    // only display information for archives that have a WACZ URL
    const archiveUrl = row["WACZ File"] || row["IA link or spreadsheet"];
    const websiteUrl = row["Collection URL"];
    const title = row["Collection Name"];
    const desc = row["Description"];

    if (websiteUrl && archiveUrl && websiteUrl.match(/^http/)) {

      const tr = document.createElement("tr");
      addCell(tr, title);
      addCell(tr, websiteUrl);
      addCell(tr, desc);

      // skip the item if we don't know how to link to the archive
      const icon = viewArchiveIcon(archiveUrl, websiteUrl);
      if (! icon) continue;

      addCell(tr, icon);

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

/**
 * Returns a linked image element to view the archive in ArchiveWeb.page or
 * Wayback Machine.
 */

function viewArchiveIcon(archiveUrl, websiteUrl) {
  const link = document.createElement("a");
  link.target = "_new";
  const img = document.createElement("img");
  img.title = "View Archive";

  if (archiveUrl.match(/web.archive.org/)) {
    link.href = archiveUrl;
    img.src = "/assets/images/ia.png";
  } else if (archiveUrl.match(/wacz$/)) {
    if (archiveUrl.match(/replayweb/)) {
      link.href = archiveUrl;
    } else {
      link.href = `https://replayweb.page/?source=${archiveUrl}#view=pages&url=${websiteUrl}`;
    }
    img.src = "/assets/images/wacz.png";
  } else {
    // didn't recognize the archive link!
    return null
  }

  link.appendChild(img);
  return link;
}

main()
