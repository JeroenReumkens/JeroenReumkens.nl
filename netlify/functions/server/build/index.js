var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    })
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-JA35WLDW.css";

// app/root.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function links() {
  return [{ rel: "stylesheet", href: tailwind_default }];
}
var meta = () => ({
  charset: "utf-8",
  title: "Jeroen Reumkens",
  viewport: "width=device-width,initial-scale=1"
}), Document = ({ children, title }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
  lang: "en",
  children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", {
      children: [
        title ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", {
          children: title
        }) : null,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Meta, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Links, {})
      ]
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.ScrollRestoration, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Scripts, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.LiveReload, {})
      ]
    })
  ]
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.Outlet, {})
  });
}
function CatchBoundary() {
  let caught = (0, import_react2.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
    title: `${caught.status} ${caught.statusText}`,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
      children: [
        "[CatchBoundary]: ",
        caught.status,
        " ",
        caught.statusText
      ]
    })
  });
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Document, {
    title: "Error!",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
      children: [
        "[ErrorBoundary]: There was an error: ",
        error.message
      ]
    })
  });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});

// app/components/container.tsx
var import_classnames = __toESM(require("classnames")), import_react3 = require("react"), import_jsx_runtime = require("react/jsx-runtime"), Container = (0, import_react3.forwardRef)(
  ({ children, className }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref,
    className: (0, import_classnames.default)(
      "mx-auto w-full max-w-[128rem] px-4 lg:px-[0]",
      className
    ),
    children
  })
);

// app/components/diving-into-frontend.tsx
var import_react6 = require("react");

// app/utils/use-motion.ts
var import_react4 = require("react"), useMotion = (refs, animation) => {
  (0, import_react4.useEffect)(() => {
    refs.some((ref) => !ref.current) || animation(refs.map((ref) => ref.current));
  }, [refs, animation]);
};

// app/components/grain-section.tsx
var import_react5 = require("react");
var import_jsx_runtime = require("react/jsx-runtime"), GrainSection = (0, import_react5.forwardRef)(({ children, color, className }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
  ref,
  className: [
    "relative flex min-h-screen justify-center py-3 font-mono",
    `after:absolute after:left-[0] after:top-[0] after:z-0 after:block after:h-full after:w-full after:bg-[url(/img/noise.png)] after:bg-[length:300px_300px] after:bg-repeat after:mix-blend-overlay after:content-['""']`,
    !color || color === "transparent" ? "bg-transparent" : "bg-gray80",
    className
  ].join(" "),
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
    className: "relative z-[1]",
    children
  })
}));

// app/components/diving-into-frontend.tsx
var import_motion = require("motion"), import_jsx_runtime = require("react/jsx-runtime"), DivingIntoFrontend = () => {
  let sectionRef = (0, import_react6.useRef)(null);
  return useMotion([sectionRef], ([section]) => {
    (0, import_motion.scroll)(
      (0, import_motion.animate)(section, {
        borderTopLeftRadius: [0, "120px"],
        borderTopRightRadius: [0, "120px"]
      }),
      {
        target: section,
        offset: ["start end", "start center"]
      }
    );
  }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrainSection, {
    ref: sectionRef,
    color: "black",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
      className: "text-body text-white md:text-humongous",
      children: "More soon.."
    })
  });
};

// app/sections/all-the-possibilities.tsx
var import_react8 = require("react");

// app/components/icons/star.tsx
var import_react7 = require("react"), import_jsx_runtime = require("react/jsx-runtime"), StarIcon = (0, import_react7.forwardRef)(
  (props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    ref,
    width: "240",
    height: "240",
    viewBox: "0 0 240 240",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
      d: "M120 0C120 108 108 120 0 120C108 120 120 132 120 240C120 132 132 120 240 120C132 120 120 108 120 0Z",
      fill: "#F9EE8D",
      stroke: "black",
      strokeWidth: "4"
    })
  })
);

// app/sections/all-the-possibilities.tsx
var import_motion2 = require("motion"), import_jsx_runtime = require("react/jsx-runtime"), AllThePossibilities = () => {
  let containerRef = (0, import_react8.useRef)(null), starLeftRef = (0, import_react8.useRef)(null), starRightRef = (0, import_react8.useRef)(null);
  return useMotion(
    [containerRef, starLeftRef, starRightRef],
    ([container, starLeft, starRight]) => {
      (0, import_motion2.scroll)(
        (0, import_motion2.animate)(starLeft, {
          scale: [1, 1.2, 0.9, 1.1, 0.9, 1],
          rotate: [4, 10, 9, 1, 0, 12, 32]
        }),
        {
          target: container,
          offset: ["start end", "end start"]
        }
      ), (0, import_motion2.scroll)(
        (0, import_motion2.animate)(starRight, {
          scale: [0.4, 0.8, 0.3, 0.5, 1.4, 1.1, 0.7, 1],
          rotate: [-12, -29, -7, 3, 12, 3, 8, -4, -21, -15, -12]
        }),
        {
          target: container,
          offset: ["start end", "end start"]
        }
      );
    }
  ), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
    ref: containerRef,
    className: "py-5 font-serif text-body font-regular leading-tight sm:py-6 sm:text-xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "relative z-10 sm:w-[75%]",
        children: "Imagine me as a teenager, seeing all the possibilities!"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        className: "relative mt-3 font-medium sm:mt-5 sm:ml-col sm:w-[60%]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, {
            ref: starLeftRef,
            "aria-hidden": !0,
            className: "pointer-events-none absolute -top-[200px] -z-0 h-6 w-6 rotate-12 sm:-left-[200px]"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StarIcon, {
            ref: starRightRef,
            "aria-hidden": !0,
            className: "pointer-events-none absolute top-full -right-[20px] -z-0 h-6 w-6 -rotate-12 sm:top-auto sm:-bottom-[20px] sm:-right-[100px]"
          }),
          "It sparked something inside me that is still there today..."
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
        className: "relative z-10 mt-2 text-small sm:ml-col sm:max-w-[60%] sm:text-[4rem]",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "font-mono text-[1.4rem] sm:text-small",
            children: "<==<"
          }),
          " ",
          "Little did I know that the web would only become more amazing over time",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "font-mono text-[1.4rem] sm:text-small",
            children: ">==>"
          })
        ]
      })
    ]
  });
};

// app/sections/early-2000s.tsx
var import_react9 = require("react");
var import_motion3 = require("motion"), import_jsx_runtime = require("react/jsx-runtime"), Early2000s = () => {
  let ref = (0, import_react9.useRef)(null);
  return useMotion([ref], ([container]) => {
    (0, import_motion3.scroll)(
      (0, import_motion3.animate)(container, {
        y: [0, "-300px"]
      }),
      {
        target: container,
        offset: ["start end", "end center"]
      }
    );
  }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
    ref,
    className: "my-5 font-mono text-body leading-tight sm:text-2xl",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "mb-3 sm:mb-5",
        children: "My passion for web however, started already as a hobby back in the early 2000s."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "mb-3 sm:mb-5",
        children: "Back in the days, when the web looked slightly different..."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
        className: "mb-3 sm:mb-5",
        children: "\u2014 when iframes, tables and GIFs were for the cool kids!"
      })
    ]
  });
};

// app/sections/intro.tsx
var import_react14 = require("react");
var import_motion5 = require("motion");

// app/components/googly-picture.tsx
var import_react10 = require("react"), import_react11 = require("react"), import_react12 = require("react"), import_react13 = require("react"), import_motion4 = require("motion"), import_jsx_runtime = require("react/jsx-runtime"), googlyEyeYMin = -5, googlyEyeYMax = 10, googlyEyeXMin = -10, googlyEyeXMax = 20, setGooglyPosition = (x, y, wrapper) => {
  wrapper.style.setProperty("--googly-x", `${x}px`), wrapper.style.setProperty("--googly-y", `${y}px`);
}, randomNumberBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min), GooglyPicture = (0, import_react13.forwardRef)((_, ref) => {
  let [dogZoom, setDogZoom] = (0, import_react11.useState)(1), maxZoomReached = dogZoom > 8, leftEye = (0, import_react12.useRef)(null), rightEye = (0, import_react12.useRef)(null), imageRef = (0, import_react12.useRef)(null), imageDimensions = (0, import_react10.useMemo)(() => imageRef.current ? { width: imageRef.current.width, height: imageRef.current.height } : { width: 300, height: 600 }, []);
  return (0, import_react13.useEffect)(() => {
    setInterval(() => {
      !leftEye.current || !rightEye.current || [leftEye.current, rightEye.current].forEach((eye) => {
        (0, import_motion4.animate)(eye, {
          y: randomNumberBetween(googlyEyeYMin, googlyEyeYMax),
          x: randomNumberBetween(googlyEyeXMin, googlyEyeXMax)
        });
      });
    }, 800);
  }, []), (0, import_react13.useEffect)(() => {
    setInterval(() => {
      ref && "current" in ref && ref.current && setGooglyPosition(
        Math.random() * imageDimensions.width,
        Math.random() * imageDimensions.height,
        ref.current
      );
    }, 3e3);
  }, [imageDimensions]), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    id: "googly-wrapper",
    ref,
    className: "relative rounded-massive border shadow-hard",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
        ref: imageRef,
        onMouseMove: (ev) => {
          let rekt = ev.currentTarget.getBoundingClientRect(), x = ev.clientX - rekt.left, y = ev.clientY - rekt.top;
          ref && "current" in ref && ref.current && setGooglyPosition(x, y, ref.current);
        },
        onClick: () => {
          maxZoomReached || setDogZoom((zoom) => zoom * 1.25);
        },
        className: "peer rounded-[inherit]",
        style: {
          cursor: maxZoomReached ? void 0 : 'url("data:image/svg+xml,%3Csvg%20width%3D%2245%22%20height%3D%2245%22%20viewBox%3D%220%200%2030%2030%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cpath%20d%3D%22M13.9415%209.61938C11.6741%209.61938%209.83582%2011.4583%209.83582%2013.7257C9.83582%2015.9935%2011.6741%2017.8319%2013.9415%2017.8319C16.2093%2017.8319%2018.0475%2015.9936%2018.0475%2013.7257C18.0476%2011.4583%2016.2095%209.61938%2013.9415%209.61938ZM15.9256%2014.6973H14.7196V15.9033C14.7196%2016.3331%2014.3713%2016.6814%2013.9415%2016.6814C13.5117%2016.6814%2013.1634%2016.3331%2013.1634%2015.9033V14.6973H11.9574C11.5275%2014.6973%2011.1792%2014.349%2011.1792%2013.9192C11.1792%2013.4893%2011.5275%2013.141%2011.9574%2013.141H13.1634V11.9347C13.1634%2011.5049%2013.5117%2011.1566%2013.9415%2011.1566C14.3713%2011.1566%2014.7196%2011.5049%2014.7196%2011.9347V13.141H15.9256C16.3554%2013.141%2016.7037%2013.4893%2016.7037%2013.9192C16.7037%2014.349%2016.3556%2014.6973%2015.9256%2014.6973Z%22%20fill%3D%22white%22%2F%3E%0A%3Cpath%20d%3D%22M14.9998%200C6.71571%200%200%206.71591%200%2014.9998C0%2023.2836%206.71571%2030.0003%2014.9998%2030.0003C23.2838%2030.0003%2030%2023.2839%2030%2014.9998C30%206.71561%2023.2839%200%2014.9998%200ZM22.5441%2022.1258C22.307%2022.3634%2021.9961%2022.4819%2021.6851%2022.4819C21.3741%2022.4819%2021.0634%2022.3634%2020.8257%2022.1258L17.4112%2018.711C16.4275%2019.3973%2015.2318%2019.8006%2013.9414%2019.8006C10.5866%2019.8006%207.86713%2017.081%207.86713%2013.7261C7.86713%2010.3713%2010.5866%207.65183%2013.9414%207.65183C17.2963%207.65183%2020.0159%2010.3713%2020.0159%2013.7258C20.0159%2014.9113%2019.6751%2016.0168%2019.0879%2016.9515L22.544%2020.4077C23.0188%2020.882%2023.0188%2021.6516%2022.5441%2022.1258Z%22%20fill%3D%22white%22%2F%3E%0A%3C%2Fsvg%3E%0A") 30 30, pointer'
        },
        src: "/img/who-dis.jpg",
        alt: "Me wearing glasses, a white blouse and having a very short beard, sitting in a coffee bar."
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
        "data-name": "googly-eyes",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 110 56",
        width: "100%",
        className: "pointer-events-none absolute top-[0] left-[0] z-10 w-[100px] translate-x-[calc(var(--googly-x)-50px)] translate-y-[calc(var(--googly-y)+25px)] transition-transform",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
            fill: "white",
            strokeWidth: 5,
            stroke: "black",
            r: "25",
            cy: "28",
            cx: "28"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
            fill: "white",
            strokeWidth: 5,
            stroke: "black",
            r: "25",
            cy: "28",
            cx: "82"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
            transform: "translate(8,5)",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
                ref: leftEye,
                fill: "black",
                r: "10",
                cy: "30",
                cx: "25"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
                ref: rightEye,
                fill: "black",
                r: "10",
                cy: "30",
                cx: "65"
              })
            ]
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
        className: "pointer-events-none absolute left-[0] top-[0] h-full w-full rounded-[inherit] object-cover opacity-0 transition-[opacity_clipPath] duration-500 ease-in-out peer-hover:opacity-100",
        style: {
          "--dog-zoom": dogZoom,
          clipPath: "circle(calc(var(--dog-zoom) * 100px) at var(--googly-x) var(--googly-y))"
        },
        src: "/img/googly-dog.gif",
        alt: "An animated gif of a dog wearing glasses with googly eyes. They have a bone in their mouth which a human tries to pull out of dog's mouth, causing the googly eyes to bounce around."
      })
    ]
  });
});

// app/sections/intro.tsx
var import_jsx_runtime = require("react/jsx-runtime"), _a;
typeof window < "u" && typeof ((_a = window == null ? void 0 : window.CSS) == null ? void 0 : _a.registerProperty) < "u" && window.CSS.registerProperty({
  name: "--grain-movement",
  inherits: !0,
  initialValue: "0",
  syntax: "<length>"
});
var Intro = () => {
  let imageRef = (0, import_react14.useRef)(null), sectionRef = (0, import_react14.useRef)(null);
  return useMotion([imageRef, sectionRef], ([image, section]) => {
    var _a2;
    (0, import_motion5.scroll)(
      (0, import_motion5.animate)(image, {
        opacity: [1, 0],
        y: [0, 100],
        borderBottomLeftRadius: ["120px", 0],
        borderBottomRightRadius: ["120px", 0]
      }),
      {
        target: image,
        offset: ["start start", -1.45]
      }
    ), (0, import_motion5.scroll)(
      (0, import_motion5.animate)(section, {
        borderRadius: ["120px", 0]
      }),
      {
        target: section,
        offset: ["start start", "center start"]
      }
    ), typeof ((_a2 = window == null ? void 0 : window.CSS) == null ? void 0 : _a2.registerProperty) < "u" && (0, import_motion5.scroll)(
      (0, import_motion5.animate)(section, {
        "--grain-movement": ["0", "100vw"]
      }),
      {
        target: section,
        offset: ["start start", "end start"]
      }
    );
  }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrainSection, {
      ref: sectionRef,
      className: "before:pointer-none flex items-center overflow-hidden rounded-b-massive pt-5 before:absolute before:left-[0] before:bottom-[0] before:z-0 before:flex before:w-full before:translate-x-[var(--grain-movement)] before:overflow-hidden before:font-mono before:text-[32rem] before:leading-[0.68] before:tracking-[-3rem] before:opacity-[0.07] before:content-['Jeroen_Reumkens'] after:rounded-b-[inherit]",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "height-full flex flex-col items-center justify-center sm:flex-row",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
            className: "flex h-full flex-col items-center justify-center sm:mr-4 sm:w-1/2 md:w-[60%] md:max-w-[80rem]",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
                className: "mb-2 font-mono text-xl font-medium leading-[0.9] md:mb-5 md:text-2xl lg:text-humongous",
                lang: "nl-NL",
                children: [
                  "Jeroen",
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                    className: "font-mono text-[2rem] font-regular sm:text-body md:text-xl",
                    "aria-hidden": !0,
                    children: "[yuh\u2018roon]"
                  }),
                  " ",
                  "Reumkens"
                ]
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "md:ml-col",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mb-2 text-small md:mb-5 md:text-body",
                    children: "is a passionate frontend engineer with over a decade of professional experience hand crafting the best experiences on the web."
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                    className: "mb-2 text-small md:mb-5 md:text-body",
                    children: "I also mentor teams & individuals, learn more."
                  })
                ]
              })
            ]
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "mb:mt-5 relatie mt-2 md:ml-auto md:mt-[0]",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GooglyPicture, {
              ref: imageRef
            })
          })
        ]
      })
    })
  });
};

// app/sections/old-skool-website.tsx
var import_jsx_runtime = require("react/jsx-runtime"), OldSkoolWebsite = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
  className: "h-screen w-full bg-[url(/img/planets.jpeg)]",
  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
    className: "flex h-full w-full",
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "relative z-10 w-6 overflow-visible border-r border-r-[#999] bg-[url(/img/planets.jpeg)] bg-[length:100px_100px] shadow-[1px_0_0_0_rgb(237,237,237)]",
        children: "left"
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "flex w-full flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            className: "h-6 overflow-visible border-b border-b-[#999] bg-[url(/img/planets.jpeg)] shadow-[0_1px_0_0_rgb(237,237,237)]",
            children: "top"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            children: "bottom"
          })
        ]
      })
    ]
  })
});

// app/routes/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Intro, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Early2000s, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
            className: "mx-auto -mt-6 mb-6 w-[600px] max-w-full md:ml-col",
            src: "/img/gifs/it-looked-a-bit-like-this.gif",
            alt: "Animated GIF with flaming text that says 'It looked a bit like this'"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
            className: "sr-only",
            children: "It looked a bit like this..."
          })
        ]
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OldSkoolWebsite, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AllThePossibilities, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DivingIntoFrontend, {})
    ]
  });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "8a898bb6", entry: { module: "/build/entry.client-3WFZBHFY.js", imports: ["/build/_shared/chunk-NIV4DOYD.js", "/build/_shared/chunk-NNE7662T.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-WEYIBV5G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2INASCYM.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-8A898BB6.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
