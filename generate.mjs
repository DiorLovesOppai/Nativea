import * as fs from "fs";
import { Document, Packer, Paragraph, Table, TableCell, TableRow, AlignmentType ,Style  } from "docx";


const designationtxt = new Paragraph({
    text:"Désignation",
    alignment: AlignmentType.CENTER,
})
const nomMateriel = new Paragraph({
    text:"",
    alignment: AlignmentType.CENTER,
}) 





const designation = new Table({
    columnWidths: [1543, 7505],
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    styles:{
                        default:{
                            color: '#151B54',
                        }
                        
                    },
                    children: [designationtxt],
                }),
                new TableCell({
                    Style:{
                        color: '#151B54',
                    },                    
                    children: [nomMateriel],
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    
                    children: [],
                }),
                new TableCell({
                    
                    children: [new Paragraph("hihello")],
                }),
            ],
        }),
    ],
});




const doc = new Document({
    sections: [
        {
            children: [
                new Paragraph({ text:{}  }),
                designation,                
            ],
        },
    ],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});