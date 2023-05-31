/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { JSONToHTMLConverter } from "../src/JSONToHTMLConverter";

it("Can render JSON to HTML", async () => {
    const input = {
        content: [
            {
                "id": 188827,
                "bitmark": "[.cloze-solution-grouped]\n[@id:188827]\n[%A4b]\n[!Ergänzen Sie die fehlenden Nomen.]\nIch kann mich natürlich sehr gut an meinen Schulweg erinnern, denn meine Schule war in einem anderen [_Stadtteil][%1] und ich musste ziemlich lange mit dem Bus fahren, 45 Minuten. Meistens habe ich während der Busfahrt meine [_Hausaufgaben][%2] gemacht. Meine [_Handschrift][%3] war dann aber nicht die schönste und viele Lehrer konnten meine Hausaufgaben nicht richtig lesen. Ich kann mich auch noch an unseren Physiklehrer erinnern. Das war ein junger Lehrer und wir haben sehr viele interessante [_Experimente][%4] durchgeführt. Meine [_Lieblingsfächer][%5] waren eigentlich alle naturwissenschaftlichen Fächer, also Physik, Chemie und Biologie. Ich wollte früher immer Tiefseetaucher werden und im Ozean nach [_Schätzen][%6] und versunkenen Schiffen suchen. Unsere Englischlehrerin, Mrs. Jones, war sehr attraktiv und ich glaube, die [_Hälfte][%7] der Jungen war in sie verliebt. Ich auch. Leider hatte ich [_Schwierigkeiten][%8] mit Sprachen, weil ich zu faul war, [_Vokabeln][%9] zu lernen. Deshalb konnte mich Mrs. Jones nicht besonders gut leiden.",
                "bit": {
                    "id": 188827,
                    "body": "Ich kann mich natürlich sehr gut an meinen Schulweg erinnern, denn meine Schule war in einem anderen {0} und ich musste ziemlich lange mit dem Bus fahren, 45 Minuten. Meistens habe ich während der Busfahrt meine {1} gemacht. Meine {2} war dann aber nicht die schönste und viele Lehrer konnten meine Hausaufgaben nicht richtig lesen. Ich kann mich auch noch an unseren Physiklehrer erinnern. Das war ein junger Lehrer und wir haben sehr viele interessante {3} durchgeführt. Meine {4} waren eigentlich alle naturwissenschaftlichen Fächer, also Physik, Chemie und Biologie. Ich wollte früher immer Tiefseetaucher werden und im Ozean nach {5} und versunkenen Schiffen suchen. Unsere Englischlehrerin, Mrs. Jones, war sehr attraktiv und ich glaube, die {6} der Jungen war in sie verliebt. Ich auch. Leider hatte ich {7} mit Sprachen, weil ich zu faul war, {8} zu lernen. Deshalb konnte mich Mrs. Jones nicht besonders gut leiden.",
                    "hint": "",
                    "item": "A4b",
                    "type": "cloze-solution-grouped",
                    "format": "bitmark--",
                    "example": "",
                    "isExample": false,
                    "instruction": "Ergänzen Sie die fehlenden Nomen.",
                    "placeholders": {
                        "{0}": {
                            "hint": "",
                            "item": "1",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Stadtteil"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{1}": {
                            "hint": "",
                            "item": "2",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Hausaufgaben"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{2}": {
                            "hint": "",
                            "item": "3",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Handschrift"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{3}": {
                            "hint": "",
                            "item": "4",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Experimente"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{4}": {
                            "hint": "",
                            "item": "5",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Lieblingsfächer"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{5}": {
                            "hint": "",
                            "item": "6",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Schätzen"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{6}": {
                            "hint": "",
                            "item": "7",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Hälfte"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{7}": {
                            "hint": "",
                            "item": "8",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Schwierigkeiten"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        },
                        "{8}": {
                            "hint": "",
                            "item": "9",
                            "type": "gap",
                            "example": "",
                            "isExample": false,
                            "solutions": [
                                "Vokabeln"
                            ],
                            "instruction": "",
                            "isCaseSensitive": true
                        }
                    }
                },
                "bookId": 2992,
                "deletionDate": null,
                "spaceId": null,
                "meta": {
                    "originBook": {
                        "bookId": 478,
                        "publisherId": 16,
                        "title": "Erkundungen B2",
                        "externalId": "schubert-verlag-leipzig-9783941323438",
                        "type": "book",
                        "spaceId": null,
                        "seriesId": "sid-0111",
                        "seriesTitle": "German as a Foreign Language",
                        "subtitle": "Deutsch als Fremdsprache",
                        "subject": "Integriertes Kurs- und Arbeitsbuch",
                        "subtype": "",
                        "isLiveBook": false,
                        "isSmartBook": false,
                        "isHighQuality": false,
                        "isPublic": false
                    },
                    "context": "",
                    "subject": "",
                    "topics": [],
                    "grammar": [],
                    "skills": [],
                    "ageRange": [],
                    "tags": [],
                    "groups": [],
                    "grade": "",
                    "complexity": "",
                    "levelIlr": "",
                    "levelCefr": "",
                    "levelActfl": "",
                    "language": "",
                    "learningLanguage": "",
                    "masterBook": null,
                    "copyright": "",
                    "publisher": null,
                    "license": null,
                    "publications": [],
                    "authors": [],
                    "isPreview": false,
                    "originBitId": 92400,
                    "thisBook": {
                        "id": 2992,
                        "externalId": "e-untitled-notebook_b2iebnebpeqe",
                        "title": "Bit&Black",
                        "type": "collection",
                        "subtype": "",
                        "isLiveBook": false,
                        "isSmartBook": false,
                        "isPublic": false,
                        "isHighQuality": false
                    },
                    "publisherId": null,
                    "seriesId": null,
                    "chapterPath": [
                        {
                            "title": "Bit&Black",
                            "level": 0,
                            "item": ""
                        }
                    ]
                },
                "bitLikeCounter": 0,
                "bitPopularityCounter": 0,
                "chapterPath": [
                    {
                        "title": "Bit&Black",
                        "level": 0,
                        "item": ""
                    }
                ]
            }
        ],
    };

    const inputJSON = JSON.stringify(input);

    const jsonToHTMLConverter = new JSONToHTMLConverter(inputJSON);
    const html = jsonToHTMLConverter.getHTML();

    expect(html)
        .not
        .toEqual("")
    ;

    expect(html)
        .toContain("bit bit--type-cloze-solution-grouped")
    ;
});