/*!
 * Get More Brain bitmark-JSON to HTML converter by Bit&Black
 * Officially under the umbrella of the bitmark Association 
 */

import { ResourceExtractor } from "../../src/Extractors/ResourceExtractor";
import { ResourceInterface } from "../../src/Bitmark/ResourceInterface";
import { ResourceTypeEnum } from "../../src/Bitmark/ResourceTypeEnum";

it("Can render resource article", async () => {
    const json = {
        type: "article",
        article: {
            body: "# Hello world!",
        }
    };

    const converted = JSON.stringify(json);
    const input: ResourceInterface = JSON.parse(converted);

    const resourceExtractor = new ResourceExtractor(input);

    expect(resourceExtractor.getResourceType())
        .toBe(ResourceTypeEnum.Article)
    ;

    expect(resourceExtractor.getBody())
        .toBe("<h1 id=\"hello-world\">Hello world!</h1>\n")
    ;
});

it("Can render resource image", async () => {
    const json = {
        type: "image",
        image: {
            src: "test.jpg",
            width: 123,
            height: 456,
        }
    };

    const converted = JSON.stringify(json);
    const input: ResourceInterface = JSON.parse(converted);

    const resourceExtractor = new ResourceExtractor(input);

    expect(resourceExtractor.getResourceType())
        .toBe(ResourceTypeEnum.Image)
    ;

    expect(resourceExtractor.getBody())
        .toBeNull()
    ;

    expect(resourceExtractor.getWidth())
        .toBe(123)
    ;

    expect(resourceExtractor.getHeight())
        .toBe(456)
    ;

    expect(resourceExtractor.getResourceLink())
        .toBe("test.jpg")
    ;

    expect(resourceExtractor.getResourceTypeName())
        .toBe("image")
    ;
});