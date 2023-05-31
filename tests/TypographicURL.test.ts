/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { TypographicURL } from "../src/TypographicURL";

it("Can wrap full URL", async () => {
    const url = "https://www.bitandblack.com/de/kontakt.html";
    const typographicURL = new TypographicURL(url);

    expect(typographicURL.getURL())
        .toBe(`<span class="url"><span class="url__piece">https://</span><span class="url__piece">www.bitandblack.com/</span><span class="url__piece">de/</span><span class="url__piece">kontakt.html</span></span>`)
    ;
});

it("Can wrap short URL", async () => {
    const url = "www.bitandblack.com/de/kontakt.html";
    const typographicURL = new TypographicURL(url);

    expect(typographicURL.getURL())
        .toBe(`<span class="url"><span class="url__piece">www.bitandblack.com/</span><span class="url__piece">de/</span><span class="url__piece">kontakt.html</span></span>`)
    ;
});