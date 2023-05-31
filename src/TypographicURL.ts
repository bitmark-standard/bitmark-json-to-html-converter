/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

class TypographicURL {
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    private getPieceWrapped(piece: string, appendSlash: boolean = false): string {
        const slash = appendSlash ? "/" : "";
        return `<span class="url__piece">${piece}${slash}</span>`;
    }

    getURL(): string {
        const urlSplitted = this.url.split(/\/\//g);
        let protocol = '';

        if (this.url.startsWith("http")) {
            protocol = urlSplitted.shift();
            protocol = this.getPieceWrapped(`${protocol}//`);
        }

        const urlPieces = urlSplitted.join("").split(/\//g);

        const urlPiecesCount = urlPieces.length;

        const urlPiecesWrapped = urlPieces
            .map((urlPiece, index) => {
                const isLastElement = index === urlPiecesCount - 1;
                return this.getPieceWrapped(urlPiece, !isLastElement);
            })
        ;

        return `<span class="url">${protocol}${urlPiecesWrapped.join("")}</span>`;
    }
}

export { TypographicURL };