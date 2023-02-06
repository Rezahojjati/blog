import React from "react";
import { render, screen } from "@testing-library/react";
import BlogPreview from "../components/blogPreview";
import { PostProps } from "../models/models";

describe("Blog Previews with image", () => {
  const mockProps: PostProps = {
    author: "V-Metrics",
    body: {
      data: {},
      content: [
        {
          data: {},
          // @ts-ignore
          nodeType: "document",
          content: [
            {
              data: {},
              marks: [],
              nodeType: "text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
            },
          ],
        },
      ],
      // @ts-ignore
      nodeType: "document",
    },
    createdAt: "2022-05-24",
    // @ts-ignore
    image: {
      fields: {
        // @ts-ignore
        description: "health image",
        file: {
          details: {
            size: 513583,
            image: {
              height: 1063,
              width: 1596,
            },
          },
          contentType: "image/jpeg",
          fileName:
            "invest-your-health-healthy-lifestyle-concept-diet-fitness-get-fit-fitness-equipment-healthy-food-invest-your-158227197.jpg",
          url: "//images.ctfassets.net/qhdh9sklg8qf/3TJkpyZeMS8CSk8gySPIYu/8098c75a0888c2f56ad150659666bc96/invest-your-health-healthy-lifestyle-concept-diet-fitness-get-fit-fitness-equipment-healthy-food-invest-your-158227197.jpg",
        },
        title: "my health image",
      },
    },
    slug: "test-title",
    title: "Test Title",
  };
  it("Should render correct heading", () => {
    render(<BlogPreview {...mockProps} />);
    const expectedHeading = "Test Title";
    const heading = screen.getByRole("heading", {
      name: expectedHeading,
    });

    expect(heading).toBeInTheDocument();
  });

  it("Should render the correct preview with image", () => {
    render(<BlogPreview {...mockProps} />);
    const preview = screen.getByTestId("blog-preview-paragraph").textContent;
    const firstParagraph: string =
      // @ts-ignore
      mockProps.body.content[0].content[0].value.slice(0, 200) + "... ";
    expect(preview).toBe(firstParagraph);
  });
});

describe("Blog Preview without image", () => {
  const mockPropsWithoutImage: PostProps = {
    author: "V-Metrics",
    body: {
      data: {},
      content: [
        {
          data: {},
          // @ts-ignore
          nodeType: "document",
          content: [
            {
              data: {},
              marks: [],
              nodeType: "text",
              value:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus.",
            },
          ],
        },
      ],
      // @ts-ignore
      nodeType: "document",
    },
    createdAt: "2022-05-24",
    slug: "test-title",
    title: "Test Title",
  };

  it("Should render the correct preview without image", () => {
    render(<BlogPreview {...mockPropsWithoutImage} />);
    // @ts-ignore
    const preview = screen.getByTestId("blog-preview-paragraph").textContent;
    const firstParagraph: string =
      // @ts-ignore
      mockPropsWithoutImage.body.content[0].content[0].value + "... ";
    expect(preview).toBe(firstParagraph);
  });
});
