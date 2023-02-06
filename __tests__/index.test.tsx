import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import Heading from "../components/heading";
import Footer from "../components/footer";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Welcome to V-Metrics Blog",
    });

    expect(heading).toBeInTheDocument();
  });
});

describe("Heading", () => {
  it("Should render the correct heading from props", () => {
    const headingProps = "My Heading";
    render(<Heading heading={headingProps} />);
    const expectedHeading = screen.getByRole("heading", {
      name: "My Heading",
    });
    expect(expectedHeading).toBeInTheDocument();
  });
});

describe("Footer", () => {
  it("Should render the correct author and date", () => {
    render(<Footer author="V-metrics" createdAt="May 25, 2022" />);
    const expectedAuthor = screen.getByText("By: V-metrics");
    const expectedDate = screen.getByText("Created at: May 25, 2022");
    expect(expectedAuthor).toBeInTheDocument();
    expect(expectedDate).toBeInTheDocument();
  });
});
