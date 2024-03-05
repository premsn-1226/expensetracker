import React from "react";

export default function docsPage({ params }: { params: { slug: string[] } }) {
  if (params.slug?.length === 2) {
    return (
      <h1>
        viewing {params.slug[1]} of {params.slug[0]} from docs
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>viewing {params.slug[0]} from docs</h1>;
  }
  return <h1>viewing docs page</h1>;
}
