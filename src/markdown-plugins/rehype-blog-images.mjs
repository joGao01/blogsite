// src/markdown-plugins/rehype-blog-images.mjs

export default function rehypeBlogImages() {
	return (tree) => transformImageNodes(tree);
}

function isElement(node, tagName) {
	return node?.type === "element" && node.tagName === tagName;
}

function transformImageNodes(node){
  if (Array.isArray(node.children)) {
		node.children = node.children.map(transformImageNodes);
	}

  // removes paragraph wrapper
  if (
		isElement(node, "p") &&
		node.children?.length === 1 &&
		isElement(node.children[0], "figure")
	) {
		return node.children[0];
	}

  if (!isElement(node, "img")) {
		return node;
	}
  
  node.properties ??= {};
  node.properties.loading = "lazy";
  node.properties.decoding = "async";
  node.properties.className = [
    ...(node.properties.className ?? []), // could potentially fail if className is not an array
    "post-image",
  ];

  const title = node.properties.title;
	if (typeof title !== "string" || title.trim() === "") {
		delete node.properties.title;
	}

  return {
		type: "element",
		tagName: "figure",
		properties: {
			className: ["post-figure"],
		},
		children: [
			{
        type: "element",
        tagName: "button",
        properties: {
          className: ["post-image-trigger"]
        },
        children: [
          node
        ]
      },
			...(title ? [{
				type: "element",
				tagName: "figcaption",
				properties: {},
				children: [
					{
						type: "text",
						value: title,
					},
				],
			}] : []),
		],
	};
}

