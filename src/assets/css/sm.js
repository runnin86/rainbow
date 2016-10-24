import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "fontSize": 20,
        "fontFamily": "sans-serif",
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%"
    },
    "body": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "fontSize": "0.85rem",
        "lineHeight": 1.5,
        "color": "#3d4145",
        "background": "#eee",
        "overflow": "hidden"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "details": {
        "display": "block"
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block"
    },
    "hgroup": {
        "display": "block"
    },
    "main": {
        "display": "block"
    },
    "menu": {
        "display": "block"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "summary": {
        "display": "block"
    },
    "audio": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "canvas": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "progress": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "video": {
        "display": "inline-block",
        "verticalAlign": "baseline"
    },
    "audio:not([controls])": {
        "display": "none",
        "height": 0
    },
    "[hidden]": {
        "display": "none"
    },
    "template": {
        "display": "none"
    },
    "a": {
        "backgroundColor": "transparent",
        "outline": 0,
        "color": "#0894ec",
        "textDecoration": "none",
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)"
    },
    "a:active": {
        "outline": 0,
        "color": "#0a8ddf"
    },
    "a:hover": {
        "outline": 0
    },
    "abbr[title]": {
        "borderBottom": "1px dotted"
    },
    "b": {
        "fontWeight": "bold"
    },
    "strong": {
        "fontWeight": "bold"
    },
    "dfn": {
        "fontStyle": "italic"
    },
    "h1": {
        "fontSize": 2,
        "marginTop": "0.67em",
        "marginRight": 0,
        "marginBottom": "0.67em",
        "marginLeft": 0
    },
    "mark": {
        "background": "#ff0",
        "color": "#000"
    },
    "small": {
        "fontSize": "80%"
    },
    "sub": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "bottom": "-0.25em"
    },
    "sup": {
        "fontSize": "75%",
        "lineHeight": 0,
        "position": "relative",
        "verticalAlign": "baseline",
        "top": "-0.5em"
    },
    "img": {
        "border": 0
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "hr": {
        "boxSizing": "content-box",
        "height": 0
    },
    "pre": {
        "overflow": "auto",
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "code": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "kbd": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "samp": {
        "fontFamily": "monospace, monospace",
        "fontSize": 1
    },
    "button": {
        "color": "#0894ec",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "visible",
        "textTransform": "none",
        "WebkitAppearance": "none",
        "cursor": "pointer",
        "outline": 0,
        "border": "1px solid #0894ec",
        "textDecoration": "none",
        "textAlign": "center",
        "display": "block",
        "borderRadius": "0.25rem",
        "lineHeight": "1.25rem",
        "boxSizing": "border-box",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "background": "none",
        "paddingTop": 0,
        "paddingRight": "0.5rem",
        "paddingBottom": 0,
        "paddingLeft": "0.5rem",
        "height": "1.35rem",
        "whiteSpace": "nowrap",
        "position": "relative",
        "textOverflow": "ellipsis",
        "fontSize": "0.7rem",
        "fontFamily": "inherit"
    },
    "input": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "lineHeight": "normal",
        "outline": 0
    },
    "optgroup": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontWeight": "bold"
    },
    "select": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textTransform": "none",
        "outline": 0
    },
    "textarea": {
        "color": "inherit",
        "font": "inherit",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "auto",
        "outline": 0
    },
    "html input[type=\"button\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"reset\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "input[type=\"submit\"]": {
        "WebkitAppearance": "button",
        "cursor": "pointer"
    },
    "button[disabled]": {
        "cursor": "default"
    },
    "html input[disabled]": {
        "cursor": "default"
    },
    "button::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input::-moz-focus-inner": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"checkbox\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"radio\"]": {
        "boxSizing": "border-box",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "input[type=\"number\"]::-webkit-inner-spin-button": {
        "height": "auto"
    },
    "input[type=\"number\"]::-webkit-outer-spin-button": {
        "height": "auto"
    },
    "input[type=\"search\"]": {
        "WebkitAppearance": "textfield",
        "boxSizing": "content-box"
    },
    "input[type=\"search\"]::-webkit-search-cancel-button": {
        "WebkitAppearance": "none"
    },
    "input[type=\"search\"]::-webkit-search-decoration": {
        "WebkitAppearance": "none"
    },
    "fieldset": {
        "border": "1px solid #c0c0c0",
        "marginTop": 0,
        "marginRight": 2,
        "marginBottom": 0,
        "marginLeft": 2,
        "paddingTop": "0.35em",
        "paddingRight": "0.625em",
        "paddingBottom": "0.75em",
        "paddingLeft": "0.625em"
    },
    "legend": {
        "border": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "table": {
        "borderCollapse": "collapse",
        "borderSpacing": 0
    },
    "td": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "th": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*": {
        "boxSizing": "border-box",
        "WebkitTapHighlightColor": "rgba(0, 0, 0, 0)",
        "WebkitTouchCallout": "none"
    },
    "p": {
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0
    },
    "page": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "background": "#efeff4",
        "zIndex": 2000,
        "boxSizing": "border-box",
        "width": "100%",
        "height": "100%",
        "display": "none",
        "overflow": "hidden"
    },
    "content": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "bottom": 0,
        "left": 0,
        "overflow": "auto",
        "WebkitOverflowScrolling": "touch"
    },
    "bar-nav ~ content": {
        "top": "2.2rem"
    },
    "bar-header-secondary ~ content": {
        "top": "4.4rem"
    },
    "bar-footer ~ content": {
        "bottom": "2.2rem"
    },
    "bar-footer-secondary ~ content": {
        "bottom": "4.4rem"
    },
    "bar-tab ~ content": {
        "bottom": "2.5rem"
    },
    "bar-footer-secondary-tab ~ content": {
        "bottom": "4.7rem"
    },
    "content-padded": {
        "marginTop": "0.5rem",
        "marginRight": "0.5rem",
        "marginBottom": "0.5rem",
        "marginLeft": "0.5rem"
    },
    "text-center": {
        "textAlign": "center"
    },
    "pull-left": {
        "float": "left"
    },
    "pull-right": {
        "float": "right"
    },
    "clearfix:before": {
        "content": "\" \"",
        "display": "table"
    },
    "clearfix:after": {
        "content": "\" \"",
        "display": "table",
        "clear": "both"
    },
    "content-block": {
        "marginTop": "1.75rem",
        "marginRight": 0,
        "marginBottom": "1.75rem",
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": "0.75rem",
        "paddingBottom": 0,
        "paddingLeft": "0.75rem",
        "color": "#6d6d72"
    },
    "content-block-title": {
        "position": "relative",
        "overflow": "hidden",
        "marginTop": "1.75rem",
        "marginRight": "0.75rem",
        "marginBottom": "0.5rem",
        "marginLeft": "0.75rem",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "fontSize": "0.7rem",
        "textTransform": "uppercase",
        "lineHeight": 1,
        "color": "#6d6d72"
    },
    "content-block-title + list-block": {
        "marginTop": "0.5rem"
    },
    "content-block-title + content-block": {
        "marginTop": "0.5rem"
    },
    "content-block-title + card": {
        "marginTop": "0.5rem"
    },
    "content-block-inner": {
        "background": "#fff",
        "paddingTop": "0.5rem",
        "paddingRight": "0.75rem",
        "paddingBottom": "0.5rem",
        "paddingLeft": "0.75rem",
        "marginLeft": "-0.75rem",
        "width": "100%",
        "position": "relative",
        "color": "#3d4145"
    },
    "content-block-inner:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#c8c7cc",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "content-block-inner:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#c8c7cc",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "content-blockinset": {
        "marginLeft": "0.75rem",
        "marginRight": "0.75rem",
        "borderRadius": "0.35rem"
    },
    "content-blockinset content-block-inner": {
        "borderRadius": "0.35rem"
    },
    "content-blockinset content-block-inner:before": {
        "display": "none"
    },
    "content-blockinset content-block-inner:after": {
        "display": "none"
    },
    "row": {
        "overflow": "hidden",
        "marginLeft": "-4%"
    },
    "row > [class*=\"col-\"]": {
        "boxSizing": "border-box",
        "float": "left"
    },
    "row > [class*=\"tablet-\"]": {
        "boxSizing": "border-box",
        "float": "left"
    },
    "rowno-gutter": {
        "marginLeft": 0
    },
    "row col-100": {
        "width": "96%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-100": {
        "width": "100%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-95": {
        "width": "91%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-95": {
        "width": "95%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-90": {
        "width": "86%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-90": {
        "width": "90%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-85": {
        "width": "81%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-85": {
        "width": "85%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-80": {
        "width": "76%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-80": {
        "width": "80%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-75": {
        "width": "71.00000000000001%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-75": {
        "width": "75%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-78": {
        "width": "74.444444444444444%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-78": {
        "width": "78%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-66": {
        "width": "62.66666666666666%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-66": {
        "width": "66.66666666666666%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-60": {
        "width": "55.99999999999999%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-60": {
        "width": "60%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-50": {
        "width": "46%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-50": {
        "width": "50%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-40": {
        "width": "36%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-40": {
        "width": "40%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-33": {
        "width": "29.333333333333332%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-33": {
        "width": "33.333333333333336%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-25": {
        "width": "21%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-25": {
        "width": "25%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-20": {
        "width": "16%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-20": {
        "width": "20%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-15": {
        "width": "10.999999999999998%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-15": {
        "width": "15%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-10": {
        "width": "6%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-10": {
        "width": "10%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "row col-5": {
        "width": "1%",
        "marginLeft": "4%"
    },
    "rowno-gutter col-5": {
        "width": "5%",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "color-default": {
        "color": "#3d4145"
    },
    "color-gray": {
        "color": "#999"
    },
    "color-primary": {
        "color": "#0894ec"
    },
    "color-success": {
        "color": "#4cd964"
    },
    "color-danger": {
        "color": "#f6383a"
    },
    "color-warning": {
        "color": "#f60"
    },
    "bar": {
        "position": "absolute",
        "right": 0,
        "left": 0,
        "zIndex": 10,
        "height": "2.2rem",
        "paddingRight": "0.5rem",
        "paddingLeft": "0.5rem",
        "backgroundColor": "#f7f7f8",
        "WebkitBackfaceVisibility": "hidden",
        "backfaceVisibility": "hidden"
    },
    "bar:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "bar-header-secondary": {
        "top": "2.2rem"
    },
    "bar-footer": {
        "bottom": 0
    },
    "bar-footer-secondary": {
        "bottom": "2.2rem"
    },
    "bar-footer-secondary-tab": {
        "bottom": "2.5rem"
    },
    "bar-footer:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "bar-footer-secondary:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "bar-footer-secondary-tab:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "bar-footer:after": {
        "display": "none"
    },
    "bar-footer-secondary:after": {
        "display": "none"
    },
    "bar-footer-secondary-tab:after": {
        "display": "none"
    },
    "bar-nav": {
        "top": 0
    },
    "title": {
        "position": "absolute",
        "display": "block",
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": "-0.5rem",
        "marginBottom": 0,
        "marginLeft": "-0.5rem",
        "fontSize": "0.85rem",
        "fontWeight": 500,
        "lineHeight": "2.2rem",
        "color": "#3d4145",
        "textAlign": "center",
        "whiteSpace": "nowrap"
    },
    "title a": {
        "color": "inherit"
    },
    "bar-tab": {
        "bottom": 0,
        "width": "100%",
        "height": "2.5rem",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "tableLayout": "fixed"
    },
    "bar-tab:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "bar-tab:after": {
        "display": "none"
    },
    "bar-tab tab-item": {
        "position": "relative",
        "display": "table-cell",
        "width": "1%",
        "height": "2.5rem",
        "color": "#929292",
        "textAlign": "center",
        "verticalAlign": "middle"
    },
    "bar-tab tab-itemactive": {
        "color": "rgb(216, 65, 65)"
    },
    "bar-tab tab-item:active": {
        "color": "rgb(216, 65, 65)"
    },
    "bar-tab tab-item badge": {
        "position": "absolute",
        "top": ".1rem",
        "left": "50%",
        "zIndex": 100,
        "height": ".8rem",
        "minWidth": ".8rem",
        "paddingTop": 0,
        "paddingRight": ".2rem",
        "paddingBottom": 0,
        "paddingLeft": ".2rem",
        "fontSize": ".6rem",
        "lineHeight": ".8rem",
        "color": "white",
        "verticalAlign": "top",
        "background": "red",
        "borderRadius": ".5rem",
        "marginLeft": ".1rem"
    },
    "bar-tab tab-item icon": {
        "top": "0.05rem",
        "height": "1.2rem",
        "fontSize": "1.2rem",
        "lineHeight": "1.2rem",
        "paddingTop": 0,
        "paddingBottom": 0
    },
    "bar-tab tab-item icon ~ tab-label": {
        "display": "block",
        "fontSize": "0.55rem",
        "position": "relative",
        "top": "0.15rem"
    },
    "bar button": {
        "position": "relative",
        "top": "0.35rem",
        "zIndex": 20,
        "marginTop": 0,
        "fontWeight": 400
    },
    "bar buttonpull-right": {
        "marginLeft": "0.5rem"
    },
    "bar buttonpull-left": {
        "marginRight": "0.5rem"
    },
    "bar button-link": {
        "top": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontSize": "0.8rem",
        "lineHeight": "2.2rem",
        "height": "2.2rem",
        "color": "#0894ec",
        "border": 0
    },
    "bar button-link:active": {
        "color": "#0675bb"
    },
    "bar button-linkactive": {
        "color": "#0675bb"
    },
    "bar button-block": {
        "top": "0.35rem",
        "fontSize": "0.8rem",
        "width": "100%"
    },
    "bar button-navpull-left": {
        "marginLeft": "-0.25rem"
    },
    "bar button-navpull-left icon-left-nav": {
        "marginRight": "-0.15rem"
    },
    "bar button-navpull-right": {
        "marginRight": "-0.25rem"
    },
    "bar button-navpull-right icon-right-nav": {
        "marginLeft": "-0.15rem"
    },
    "bar icon": {
        "position": "relative",
        "zIndex": 20,
        "paddingTop": ".5rem",
        "paddingRight": ".1rem",
        "paddingBottom": ".5rem",
        "paddingLeft": ".1rem",
        "fontSize": 1,
        "lineHeight": "1.2rem"
    },
    "bar button icon": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "bar title icon": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "bar title iconicon-caret": {
        "top": "0.2rem",
        "marginLeft": "-0.25rem"
    },
    "bar-footer icon": {
        "fontSize": "1.2rem",
        "lineHeight": "1.2rem"
    },
    "bar input[type=\"search\"]": {
        "height": "1.45rem",
        "marginTop": "0.3rem",
        "marginRight": 0,
        "marginBottom": "0.3rem",
        "marginLeft": 0
    },
    "badge": {
        "display": "inline-block",
        "paddingTop": "0.1rem",
        "paddingRight": "0.45rem",
        "paddingBottom": "0.15rem",
        "paddingLeft": "0.45rem",
        "fontSize": "0.6rem",
        "lineHeight": 1,
        "color": "#3d4145",
        "backgroundColor": "rgba(0, 0, 0, 0.15)",
        "borderRadius": 5
    },
    "badgebadge-inverted": {
        "paddingTop": 0,
        "paddingRight": "0.25rem",
        "paddingBottom": 0,
        "paddingLeft": 0,
        "backgroundColor": "transparent"
    },
    "list-block": {
        "marginTop": "1.75rem",
        "marginRight": 0,
        "marginBottom": "1.75rem",
        "marginLeft": 0,
        "fontSize": "0.85rem"
    },
    "list-block ul": {
        "background": "#fff",
        "listStyle": "none",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "position": "relative"
    },
    "list-block ul:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "list-block ul:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "list-block ul ul": {
        "paddingLeft": "2.25rem"
    },
    "list-block ul ul:before": {
        "display": "none"
    },
    "list-block ul ul:after": {
        "display": "none"
    },
    "list-block align-top": {
        "WebkitBoxAlign": "start",
        "WebkitAlignItems": "flex-start",
        "alignItems": "flex-start"
    },
    "list-block align-top item-content": {
        "WebkitBoxAlign": "start",
        "WebkitAlignItems": "flex-start",
        "alignItems": "flex-start"
    },
    "list-block align-top item-inner": {
        "WebkitBoxAlign": "start",
        "WebkitAlignItems": "flex-start",
        "alignItems": "flex-start"
    },
    "list-blockinset": {
        "marginLeft": "0.75rem",
        "marginRight": "0.75rem",
        "borderRadius": "0.35rem"
    },
    "list-blockinset content-block-title": {
        "marginLeft": 0,
        "marginRight": 0
    },
    "list-blockinset ul": {
        "borderRadius": "0.35rem"
    },
    "list-blockinset ul:before": {
        "display": "none"
    },
    "list-blockinset ul:after": {
        "display": "none"
    },
    "list-blockinset li:first-child > a": {
        "borderRadius": "0.35rem 0.35rem 0 0"
    },
    "list-blockinset li:last-child > a": {
        "borderRadius": "0 0 0.35rem 0.35rem"
    },
    "list-blockinset li:first-child:last-child > a": {
        "borderRadius": "0.35rem"
    },
    "list-block li": {
        "boxSizing": "border-box",
        "position": "relative"
    },
    "list-block item-media": {
        "display": "flex",
        "WebkitFlexShrink": 0,
        "MsFlex": "0 0 auto",
        "flexShrink": 0,
        "WebkitBoxLines": "single",
        "MozBoxLines": "single",
        "WebkitFlexWrap": "nowrap",
        "flexWrap": "nowrap",
        "boxSizing": "border-box",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "alignItems": "center",
        "paddingTop": "0.35rem",
        "paddingBottom": "0.4rem"
    },
    "list-block item-media i + i": {
        "marginLeft": "0.25rem"
    },
    "list-block item-media i + img": {
        "marginLeft": "0.25rem"
    },
    "list-block item-media + item-inner": {
        "marginLeft": "0.75rem"
    },
    "list-block item-inner": {
        "paddingRight": "0.75rem",
        "position": "relative",
        "width": "100%",
        "paddingTop": "0.4rem",
        "paddingBottom": "0.35rem",
        "minHeight": "2.2rem",
        "overflow": "hidden",
        "boxSizing": "border-box",
        "display": "flex",
        "WebkitBoxFlex": 1,
        "MsFlex": 1,
        "WebkitBoxPack": "justify",
        "WebkitJustifyContent": "space-between",
        "justifyContent": "space-between",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "alignItems": "center"
    },
    "list-block item-inner:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "list-block item-title": {
        "WebkitFlexShrink": 1,
        "MsFlex": "0 1 auto",
        "flexShrink": 1,
        "whiteSpace": "nowrap",
        "position": "relative",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "maxWidth": "100%"
    },
    "list-block item-titlelabel": {
        "width": "35%",
        "WebkitFlexShrink": 0,
        "MsFlex": "0 0 auto",
        "flexShrink": 0,
        "marginTop": 4,
        "marginRight": 0,
        "marginBottom": 4,
        "marginLeft": 0
    },
    "list-block item-input": {
        "width": "100%",
        "marginTop": "-0.4rem",
        "marginBottom": "-0.35rem",
        "WebkitBoxFlex": 1,
        "MsFlex": "0 1 auto",
        "WebkitFlexShrink": 1,
        "flexShrink": 1
    },
    "list-block item-after": {
        "whiteSpace": "nowrap",
        "color": "#5f646e",
        "WebkitFlexShrink": 0,
        "MsFlex": "0 0 auto",
        "flexShrink": 0,
        "marginLeft": "0.25rem",
        "display": "flex",
        "maxHeight": "1.4rem"
    },
    "list-block smart-select item-after": {
        "maxWidth": "70%",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "position": "relative"
    },
    "list-block item-link": {
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms",
        "display": "block",
        "color": "inherit"
    },
    "list-block item-link item-inner": {
        "paddingRight": "1.5rem",
        "backgroundImage": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUM0QzFDNzMyREM0MTFFNUJDNTI4OTMzMEE0RjBENzMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUM0QzFDNzQyREM0MTFFNUJDNTI4OTMzMEE0RjBENzMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1QzRDMUM3MTJEQzQxMUU1QkM1Mjg5MzMwQTRGMEQ3MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1QzRDMUM3MjJEQzQxMUU1QkM1Mjg5MzMwQTRGMEQ3MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjs2Bb4AAAItSURBVHjazJhbK0RRGIb3DIOU/AG5kUTOgxmHceFGKf6BO+Vf+E8KKYcYg3FuMpNIDhFJXJAcp/GtvKumrzVs+zBrvfU2u689q6d3rb33+lYgl8tZvymZ3JOX7eQp8gT50fJA0Wj4z3tKbY5VR14hV5ObyWLkZ6sICtq4p4V8CjihevIWucoUQJFUmtUayTvkShMAL5DiGqs3IMlK3YBSgwrIZkBWmAAoIRMKyG2/IIMO/hMjbygepCS53ARAoQHyOqu1YbrLTADMAXJbASmSDOkGlOpTQHaQN72CdAuYBeQuq4cBWaIbUEJGC0Am3UIGPVoqMsk9Vu/CwxTQDSj0iSQPWD2C6Q7oBhT6AmRKAZkwAVDoowBkn+LdqQVQ6A2QhwrIuAmAEjKi2KrF/jPdfgIKveI7Pcfq/eSMCYBSD4pakymA0+RxVrsn15oAOEMeY7Vbcif5ys4ApT7CzZJHWO2G3I1fSyfgPHmY1a7x6bvT/ZpZUMBdOoHzI8El8pCiK+wq8CQXNcFlBdw51tyD00G9SnAVHV++zgDn6hzHiwTjCrgTTKvrQya3Ca5jA5CvY3IP+UlnTxJEb8zhjpDck1cL20mCAcBFWD2D2ovOvjiERojDpTGtnsL9N8EQegt+LJrC5vRN59lMORp0DrePNH2BswvYivXVzuoHSO7dz+2QHcAa6+eMOl87WHOffm8m7QCK7foog+tFi2mZACg3npPkRUxrtkitgvUtwAA5A3LWdzPizwAAAABJRU5ErkJggg==)",
        "backgroundSize": "0.7rem",
        "backgroundRepeat": "no-repeat",
        "backgroundPosition": "calc(100% - .5rem) center"
    },
    "html:not(watch-active-state) list-block item-link:active": {
        "WebkitTransitionDuration": "0ms",
        "transitionDuration": "0ms",
        "backgroundColor": "#d9d9d9"
    },
    "list-block item-linkactive-state": {
        "WebkitTransitionDuration": "0ms",
        "transitionDuration": "0ms",
        "backgroundColor": "#d9d9d9"
    },
    "html:not(watch-active-state) list-block item-link:active item-inner:after": {
        "backgroundColor": "transparent"
    },
    "list-block item-linkactive-state item-inner:after": {
        "backgroundColor": "transparent"
    },
    "list-block item-linklist-button": {
        "paddingTop": 0,
        "paddingRight": "0.75rem",
        "paddingBottom": 0,
        "paddingLeft": "0.75rem",
        "textAlign": "center",
        "color": "#0894ec",
        "display": "block",
        "lineHeight": "2.15rem"
    },
    "list-block item-linklist-button:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "list-block item-content": {
        "boxSizing": "border-box",
        "paddingLeft": "0.75rem",
        "minHeight": "2.2rem",
        "display": "flex",
        "WebkitBoxPack": "justify",
        "WebkitJustifyContent": "space-between",
        "justifyContent": "space-between",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "alignItems": "center"
    },
    "list-block list-block-label": {
        "marginTop": "0.5rem",
        "marginRight": 0,
        "marginBottom": "1.75rem",
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": "0.75rem",
        "paddingBottom": 0,
        "paddingLeft": "0.75rem",
        "fontSize": "0.7rem",
        "color": "#5f646e"
    },
    "list-block item-subtitle": {
        "fontSize": "0.75rem",
        "position": "relative",
        "overflow": "hidden",
        "whiteSpace": "nowrap",
        "maxWidth": "100%",
        "textOverflow": "ellipsis"
    },
    "list-block item-text": {
        "fontSize": "0.75rem",
        "color": "#5f646e",
        "lineHeight": "1.05rem",
        "position": "relative",
        "overflow": "hidden",
        "height": "2.1rem",
        "textOverflow": "ellipsis",
        "WebkitLineClamp": 2,
        "WebkitBoxOrient": "vertical",
        "display": "-webkit-box"
    },
    "list-blockmedia-list item-title": {
        "fontWeight": 500
    },
    "list-blockmedia-list item-inner": {
        "display": "block",
        "paddingTop": "0.5rem",
        "paddingBottom": "0.45rem",
        "WebkitAlignSelf": "stretch",
        "alignSelf": "stretch"
    },
    "list-blockmedia-list item-media": {
        "paddingTop": "0.45rem",
        "paddingBottom": "0.5rem"
    },
    "list-blockmedia-list item-media img": {
        "display": "block"
    },
    "list-blockmedia-list item-title-row": {
        "display": "flex",
        "WebkitBoxPack": "justify",
        "WebkitJustifyContent": "space-between",
        "justifyContent": "space-between"
    },
    "list-block list-group ul:after": {
        "zIndex": 11
    },
    "list-block list-group ul:before": {
        "zIndex": 11
    },
    "list-block list-group + list-group ul:before": {
        "display": "none"
    },
    "list-block item-divider": {
        "background": "#F7F7F7",
        "marginTop": "-1px",
        "paddingTop": "0.2rem",
        "paddingRight": "0.75rem",
        "paddingBottom": "0.2rem",
        "paddingLeft": "0.75rem",
        "whiteSpace": "nowrap",
        "position": "relative",
        "maxWidth": "100%",
        "textOverflow": "ellipsis",
        "overflow": "hidden",
        "color": "#e7e7e7"
    },
    "list-block list-group-title": {
        "background": "#F7F7F7",
        "marginTop": 0,
        "paddingTop": "0.2rem",
        "paddingRight": "0.75rem",
        "paddingBottom": "0.2rem",
        "paddingLeft": "0.75rem",
        "whiteSpace": "nowrap",
        "position": "sticky",
        "maxWidth": "100%",
        "textOverflow": "ellipsis",
        "overflow": "hidden",
        "color": "#e7e7e7",
        "top": 0,
        "zIndex": 20
    },
    "list-block item-divider:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "list-block list-group-title:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "none",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "list-block li:last-child list-button:after": {
        "display": "none"
    },
    "list-block li:last-child item-inner:after": {
        "display": "none"
    },
    "list-block li:last-child li:last-child item-inner:after": {
        "display": "none"
    },
    "list-block li li:last-child item-inner:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "list-block li:last-child li item-inner:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#e7e7e7",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "list-block input[type=\"text\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block input[type=\"password\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block input[type=\"search\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block input[type=\"email\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block input[type=\"tel\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block input[type=\"url\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block input[type=\"date\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit",
        "lineHeight": "2.2rem"
    },
    "list-block input[type=\"datetime-local\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit",
        "lineHeight": "2.2rem"
    },
    "list-block input[type=\"time\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block input[type=\"number\"]": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block select": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": "2.15rem",
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit"
    },
    "list-block textarea": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "boxSizing": "border-box",
        "border": "none",
        "background": "none",
        "borderRadius": "0 0 0 0",
        "boxShadow": "none",
        "display": "block",
        "paddingTop": "0.4rem",
        "paddingRight": 0,
        "paddingBottom": "0.35rem",
        "paddingLeft": "0.25rem",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "width": "100%",
        "height": 5,
        "color": "#3d4145",
        "fontSize": "0.85rem",
        "fontFamily": "inherit",
        "resize": "none",
        "lineHeight": 1.4
    },
    "list-block label": {
        "verticalAlign": "top"
    },
    "label-switch": {
        "display": "inline-block",
        "verticalAlign": "middle",
        "width": "2.6rem",
        "borderRadius": "0.8rem",
        "boxSizing": "border-box",
        "height": "1.6rem",
        "position": "relative",
        "cursor": "pointer",
        "WebkitAlignSelf": "center",
        "alignSelf": "center"
    },
    "label-switch checkbox": {
        "width": "2.6rem",
        "borderRadius": "0.8rem",
        "boxSizing": "border-box",
        "height": "1.6rem",
        "background": "#e5e5e5",
        "zIndex": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "border": "none",
        "cursor": "pointer",
        "position": "relative",
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms"
    },
    "label-switch checkbox:before": {
        "content": "' '",
        "position": "absolute",
        "left": "0.1rem",
        "top": "0.1rem",
        "width": "2.4rem",
        "borderRadius": "0.8rem",
        "boxSizing": "border-box",
        "height": "1.4rem",
        "background": "#fff",
        "zIndex": 1,
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms",
        "WebkitTransform": "scale(1)",
        "transform": "scale(1)"
    },
    "label-switch checkbox:after": {
        "content": "' '",
        "height": "1.4rem",
        "width": "1.4rem",
        "borderRadius": "1.4rem",
        "background": "#fff",
        "position": "absolute",
        "zIndex": 2,
        "top": "0.1rem",
        "left": "0.1rem",
        "boxShadow": "0 0.1rem 0.25rem rgba(0, 0, 0, 0.4)",
        "WebkitTransform": "translateX(0px)",
        "transform": "translateX(0px)",
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms"
    },
    "label-switch input[type=\"checkbox\"]": {
        "display": "none"
    },
    "label-switch input[type=\"checkbox\"]:checked + checkbox": {
        "background": "#4cd964"
    },
    "label-switch input[type=\"checkbox\"]:checked + checkbox:before": {
        "WebkitTransform": "scale(0)",
        "transform": "scale(0)"
    },
    "label-switch input[type=\"checkbox\"]:checked + checkbox:after": {
        "WebkitTransform": "translateX(1.1rem)",
        "transform": "translateX(1.1rem)"
    },
    "htmlandroid label-switch input[type=\"checkbox\"] + checkbox": {
        "WebkitTransitionDuration": 0,
        "transitionDuration": 0
    },
    "htmlandroid label-switch input[type=\"checkbox\"] + checkbox:after": {
        "WebkitTransitionDuration": 0,
        "transitionDuration": 0
    },
    "htmlandroid label-switch input[type=\"checkbox\"] + checkbox:before": {
        "WebkitTransitionDuration": 0,
        "transitionDuration": 0
    },
    "range-slider": {
        "width": "100%",
        "position": "relative",
        "overflow": "hidden",
        "paddingLeft": "0.15rem",
        "paddingRight": "0.15rem",
        "marginLeft": "-1px",
        "WebkitAlignSelf": "center",
        "alignSelf": "center"
    },
    "range-slider input[type=\"range\"]": {
        "position": "relative",
        "height": "1.4rem",
        "width": "100%",
        "marginTop": "0.2rem",
        "marginRight": 0,
        "marginBottom": "0.25rem",
        "marginLeft": 0,
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "background": "linear-gradient(to right, #b7b8b7 0, #b7b8b7 100%)",
        "backgroundPosition": "center",
        "backgroundSize": "100% 0.1rem",
        "backgroundRepeat": "no-repeat",
        "outline": 0
    },
    "range-slider input[type=\"range\"]:after": {
        "height": "0.1rem",
        "background": "#fff",
        "content": "' '",
        "width": "0.25rem",
        "top": "50%",
        "marginTop": "-1px",
        "left": "-0.25rem",
        "zIndex": 1,
        "position": "absolute"
    },
    "range-slider input[type=\"range\"]::-webkit-slider-thumb": {
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "MsAppearance": "none",
        "appearance": "none",
        "border": "none",
        "height": "1.4rem",
        "width": "1.4rem",
        "position": "relative",
        "background": "none"
    },
    "range-slider input[type=\"range\"]::-webkit-slider-thumb:after": {
        "height": "1.4rem",
        "width": "1.4rem",
        "borderRadius": "1.4rem",
        "background": "#fff",
        "zIndex": 10,
        "boxShadow": "0 0.1rem 0.2rem rgba(0, 0, 0, 0.4)",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "content": "' '"
    },
    "range-slider input[type=\"range\"]::-webkit-slider-thumb:before": {
        "position": "absolute",
        "top": "50%",
        "right": "100%",
        "width": 100,
        "height": "0.1rem",
        "marginTop": "-1px",
        "zIndex": 1,
        "background": "#0894ec",
        "content": "' '"
    },
    "labellabel-checkbox": {
        "cursor": "pointer",
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms"
    },
    "labellabel-checkbox iicon-form-checkbox": {
        "width": "1.1rem",
        "height": "1.1rem",
        "position": "relative",
        "borderRadius": "1.1rem",
        "border": "1px solid #c7c7cc",
        "boxSizing": "border-box"
    },
    "labellabel-checkbox iicon-form-checkbox:after": {
        "content": "' '",
        "position": "absolute",
        "left": "50%",
        "marginLeft": "-0.3rem",
        "top": "50%",
        "marginTop": "-0.2rem",
        "width": "0.6rem",
        "height": "0.45rem"
    },
    "labellabel-checkbox input[type=\"checkbox\"]": {
        "display": "none"
    },
    "labellabel-checkbox input[type=\"radio\"]": {
        "display": "none"
    },
    "labellabel-checkbox input[type=\"checkbox\"]:checked + item-media iicon-form-checkbox": {
        "border": "none",
        "backgroundColor": "#0894ec"
    },
    "labellabel-checkbox input[type=\"radio\"]:checked + item-media iicon-form-checkbox": {
        "border": "none",
        "backgroundColor": "#0894ec"
    },
    "labellabel-checkbox input[type=\"checkbox\"]:checked + item-media iicon-form-checkbox:after": {
        "background": "no-repeat center",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\")",
        "backgroundSize": "0.6rem 0.45rem"
    },
    "labellabel-checkbox input[type=\"radio\"]:checked + item-media iicon-form-checkbox:after": {
        "background": "no-repeat center",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20x%3D'0px'%20y%3D'0px'%20viewBox%3D'0%200%2012%209'%20xml%3Aspace%3D'preserve'%3E%3Cpolygon%20fill%3D'%23ffffff'%20points%3D'12%2C0.7%2011.3%2C0%203.9%2C7.4%200.7%2C4.2%200%2C4.9%203.9%2C8.8%203.9%2C8.8%203.9%2C8.8%20'%2F%3E%3C%2Fsvg%3E\")",
        "backgroundSize": "0.6rem 0.45rem"
    },
    "html:not(watch-active-state) labellabel-checkbox:active": {
        "WebkitTransition": "0ms",
        "transition": "0ms",
        "backgroundColor": "#d9d9d9"
    },
    "labellabel-checkboxactive-state": {
        "WebkitTransition": "0ms",
        "transition": "0ms",
        "backgroundColor": "#d9d9d9"
    },
    "html:not(watch-active-state) labellabel-checkbox:active item-inner:after": {
        "backgroundColor": "transparent"
    },
    "labellabel-checkboxactive-state item-inner:after": {
        "backgroundColor": "transparent"
    },
    "smart-select select": {
        "display": "none"
    },
    "input[type=\"submit\"]button": {
        "width": "100%"
    },
    "input[type=\"button\"]button": {
        "width": "100%"
    },
    "button:active": {
        "color": "#0a8ddf",
        "borderColor": "#0a8ddf"
    },
    "buttonbutton-round": {
        "borderRadius": "1.25rem"
    },
    "buttonactive": {
        "color": "#0a8ddf",
        "borderColor": "#0a8ddf"
    },
    "buttonactive:active": {
        "color": "#0a8ddf",
        "borderColor": "#0a8ddf"
    },
    "buttonbutton-big": {
        "fontSize": "0.85rem",
        "height": "2.4rem",
        "lineHeight": "2.3rem"
    },
    "buttonbutton-fill": {
        "color": "#fff",
        "border": "none",
        "lineHeight": "1.35rem"
    },
    "buttonbutton-fillactive": {},
    "buttonbutton-fill:active": {},
    "buttonbutton-fillbutton-big": {
        "lineHeight": "2.4rem"
    },
    "button button-link": {
        "paddingTop": "0.3rem",
        "paddingBottom": "0.3rem",
        "color": "#0894ec",
        "backgroundColor": "transparent",
        "border": 0
    },
    "button iicon:first-child": {
        "marginRight": "0.5rem"
    },
    "button iicon:last-child": {
        "marginLeft": "0.5rem"
    },
    "button iicon:first-child:last-child": {
        "marginLeft": 0,
        "marginRight": 0
    },
    "buttons-row": {
        "WebkitAlignSelf": "center",
        "alignSelf": "center",
        "display": "flex",
        "WebkitBoxLines": "single",
        "MozBoxLines": "single",
        "WebkitFlexWrap": "nowrap",
        "flexWrap": "nowrap"
    },
    "buttons-tab": {
        "WebkitAlignSelf": "center",
        "alignSelf": "center",
        "display": "flex",
        "WebkitBoxLines": "single",
        "MozBoxLines": "single",
        "WebkitFlexWrap": "nowrap",
        "flexWrap": "nowrap",
        "background": "white",
        "position": "relative"
    },
    "buttons-row button": {
        "borderRadius": "0 0 0 0",
        "marginLeft": "-1px",
        "width": "100%",
        "WebkitBoxFlex": 1,
        "MsFlex": 1,
        "borderColor": "#0894ec",
        "color": "#0894ec"
    },
    "buttons-row buttonactive": {
        "backgroundColor": "#0894ec",
        "color": "white",
        "zIndex": 90
    },
    "buttons-row button:first-child": {
        "borderRadius": "0.25rem 0 0 0.25rem",
        "marginLeft": 0,
        "borderLeftWidth": 1,
        "borderLeftStyle": "solid"
    },
    "buttons-row button:last-child": {
        "borderRadius": "0 0.25rem 0.25rem 0"
    },
    "buttons-row buttonbutton-round:first-child": {
        "borderRadius": "1.35rem 0 0 1.35rem"
    },
    "buttons-row buttonbutton-round:last-child": {
        "borderRadius": "0 1.35rem 1.35rem 0"
    },
    "buttons-tab:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#d0d0d0",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "buttons-tab button": {
        "color": "#5f646e",
        "fontSize": "0.8rem",
        "width": "100%",
        "height": 2,
        "lineHeight": 2,
        "WebkitBoxFlex": 1,
        "MsFlex": 1,
        "border": 0,
        "borderBottom": "2px solid transparent",
        "borderRadius": 0
    },
    "buttons-tab buttonactive": {
        "color": "#0894ec",
        "borderColor": "#0894ec",
        "zIndex": 100
    },
    "buttons-fixed": {
        "position": "fixed",
        "zIndex": 99,
        "width": "100%"
    },
    "tabs tab": {
        "display": "none"
    },
    "tabs tabactive": {
        "display": "block"
    },
    "tabs-animated-wrap": {
        "position": "relative",
        "width": "100%",
        "overflow": "hidden",
        "height": "100%"
    },
    "tabs-animated-wrap > tabs": {
        "display": "flex",
        "height": "100%",
        "WebkitTransition": "300ms",
        "transition": "300ms"
    },
    "tabs-animated-wrap > tabs > tab": {
        "width": "100%",
        "display": "block",
        "WebkitFlexShrink": 0,
        "MsFlex": "0 0 auto",
        "flexShrink": 0
    },
    "pagepage-current": {
        "display": "block",
        "overflow": "hidden"
    },
    "content-inner": {
        "boxSizing": "border-box",
        "borderTop": "1px solid transparent",
        "marginTop": "-1px",
        "paddingBottom": "0.5rem"
    },
    "javascript-scroll": {
        "overflow": "hidden"
    },
    "pull-to-refresh-layer": {
        "position": "relative",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "2.2rem"
    },
    "pull-to-refresh-layer preloader": {
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "marginLeft": "-0.5rem",
        "marginTop": "-0.5rem",
        "visibility": "hidden"
    },
    "pull-to-refresh-layer pull-to-refresh-arrow": {
        "width": "0.65rem",
        "height": 1,
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "marginLeft": "-0.15rem",
        "marginTop": "-0.5rem",
        "background": "no-repeat center",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2026%2040'%3E%3Cpolygon%20points%3D'9%2C22%209%2C0%2017%2C0%2017%2C22%2026%2C22%2013.5%2C40%200%2C22'%20fill%3D'%238c8c8c'%2F%3E%3C%2Fsvg%3E\")",
        "backgroundSize": "0.65rem 1rem",
        "zIndex": 10,
        "WebkitTransform": "rotate(0deg) translate3d(0, 0, 0)",
        "transform": "rotate(0deg) translate3d(0, 0, 0)",
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms"
    },
    "pull-to-refresh-content": {
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "top": "-2.2rem"
    },
    "pull-to-refresh-contenttransitioning": {
        "WebkitTransition": "-webkit-transform 400ms",
        "transition": "transform 400ms"
    },
    "pull-to-refresh-contentrefreshing": {
        "WebkitTransition": "-webkit-transform 400ms",
        "transition": "transform 400ms",
        "WebkitTransform": "translate3d(0, 2.2rem, 0)",
        "transform": "translate3d(0, 2.2rem, 0)"
    },
    "pull-to-refresh-content:not(refreshing) pull-to-refresh-layer preloader": {
        "WebkitAnimation": "none",
        "animation": "none"
    },
    "pull-to-refresh-contentrefreshing pull-to-refresh-arrow": {
        "visibility": "hidden",
        "WebkitTransitionDuration": "0ms",
        "transitionDuration": "0ms"
    },
    "pull-to-refresh-contentrefreshing preloader": {
        "visibility": "visible"
    },
    "pull-to-refresh-contentpull-up pull-to-refresh-arrow": {
        "WebkitTransform": "rotate(180deg) translate3d(0, 0, 0)",
        "transform": "rotate(180deg) translate3d(0, 0, 0)"
    },
    "bar-nav ~ pull-to-refresh-content": {
        "top": 0
    },
    "bar-footer ~ pull-to-refresh-content": {
        "top": 0
    },
    "bar-tab ~ pull-to-refresh-content": {
        "top": 0
    },
    "bar-nav ~ pull-to-refresh-contentrefreshing": {
        "WebkitTransform": "translate3d(0, 2.2rem, 0)",
        "transform": "translate3d(0, 2.2rem, 0)"
    },
    "bar-footer ~ pull-to-refresh-contentrefreshing": {
        "WebkitTransform": "translate3d(0, 2.2rem, 0)",
        "transform": "translate3d(0, 2.2rem, 0)"
    },
    "bar-tab ~ pull-to-refresh-contentrefreshing": {
        "WebkitTransform": "translate3d(0, 2.2rem, 0)",
        "transform": "translate3d(0, 2.2rem, 0)"
    },
    "bar-header-secondary ~ pull-to-refresh-content": {
        "top": "2.2rem"
    },
    "bar-footer-secondary ~ pull-to-refresh-content": {
        "top": "2.2rem"
    },
    "infinite-scroll-preloader": {
        "marginTop": "0.5rem",
        "marginRight": "0.5rem",
        "marginBottom": "0.5rem",
        "marginLeft": "0.5rem",
        "textAlign": "center"
    },
    "infinite-scroll-preloader preloader": {
        "width": "1.5rem",
        "height": "1.5rem"
    },
    "infinite-scroll-top infinite-scroll-preloader": {
        "position": "absolute",
        "width": "100%",
        "top": 0,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "modal-overlay": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, 0.5)",
        "zIndex": 10600,
        "visibility": "hidden",
        "opacity": 0,
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms"
    },
    "preloader-indicator-overlay": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "background": "none",
        "zIndex": 10600,
        "visibility": "visible",
        "opacity": 0,
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms"
    },
    "popup-overlay": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "background": "rgba(0, 0, 0, 0.5)",
        "zIndex": 10200,
        "visibility": "hidden",
        "opacity": 0,
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms"
    },
    "modal-overlaymodal-overlay-visible": {
        "visibility": "visible",
        "opacity": 1
    },
    "preloader-indicator-overlaymodal-overlay-visible": {
        "visibility": "visible",
        "opacity": 1
    },
    "popup-overlaymodal-overlay-visible": {
        "visibility": "visible",
        "opacity": 1
    },
    "modal": {
        "width": "13.5rem",
        "position": "absolute",
        "zIndex": 11000,
        "left": "50%",
        "marginLeft": "-6.75rem",
        "marginTop": 0,
        "top": "50%",
        "textAlign": "center",
        "borderRadius": "0.35rem",
        "opacity": 0,
        "WebkitTransform": "translate3d(0, 0, 0) scale(1.185)",
        "transform": "translate3d(0, 0, 0) scale(1.185)",
        "WebkitTransitionProperty": "-webkit-transform, opacity",
        "transitionProperty": "transform, opacity",
        "color": "#3d4145",
        "display": "none"
    },
    "modalmodal-in": {
        "opacity": 1,
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 0, 0) scale(1)",
        "transform": "translate3d(0, 0, 0) scale(1)"
    },
    "modalmodal-out": {
        "opacity": 0,
        "zIndex": 10999,
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 0, 0) scale(0.815)",
        "transform": "translate3d(0, 0, 0) scale(0.815)"
    },
    "modal-inner": {
        "paddingTop": "0.75rem",
        "paddingRight": "0.75rem",
        "paddingBottom": "0.75rem",
        "paddingLeft": "0.75rem",
        "borderRadius": "0.35rem 0.35rem 0 0",
        "position": "relative",
        "background": "#e8e8e8"
    },
    "modal-inner:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#b5b5b5",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "modal-title": {
        "fontWeight": 500,
        "fontSize": "0.9rem",
        "textAlign": "center"
    },
    "modal-title + modal-text": {
        "marginTop": "0.25rem"
    },
    "modal-buttons": {
        "height": "2.2rem",
        "overflow": "hidden",
        "display": "flex",
        "WebkitBoxPack": "center",
        "WebkitJustifyContent": "center",
        "justifyContent": "center"
    },
    "modal-buttonsmodal-buttons-vertical": {
        "display": "block",
        "height": "auto"
    },
    "modal-button": {
        "width": "100%",
        "paddingTop": 0,
        "paddingRight": "0.25rem",
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "height": "2.2rem",
        "fontSize": "0.85rem",
        "lineHeight": "2.2rem",
        "textAlign": "center",
        "color": "#0894ec",
        "background": "#e8e8e8",
        "display": "block",
        "position": "relative",
        "whiteSpace": "nowrap",
        "textOverflow": "ellipsis",
        "overflow": "hidden",
        "cursor": "pointer",
        "boxSizing": "border-box",
        "WebkitBoxFlex": 1,
        "MsFlex": 1
    },
    "modal-button:after": {},
    "modal-button:first-child": {
        "borderRadius": "0 0 0 0.35rem"
    },
    "modal-button:last-child": {
        "borderRadius": "0 0 0.35rem 0"
    },
    "modal-button:last-child:after": {
        "display": "none"
    },
    "modal-button:first-child:last-child": {
        "borderRadius": "0 0 0.35rem 0.35rem"
    },
    "modal-buttonmodal-button-bold": {
        "fontWeight": 500
    },
    "html:not(watch-active-state) modal-button:active": {
        "background": "#d4d4d4"
    },
    "modal-buttonactive-state": {
        "background": "#d4d4d4"
    },
    "modal-buttons-vertical modal-button": {
        "borderRadius": 0
    },
    "modal-buttons-vertical modal-button:after": {
        "display": "block",
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#b5b5b5",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "modal-buttons-vertical modal-button:before": {
        "display": "none"
    },
    "modal-buttons-vertical modal-button:last-child": {
        "borderRadius": "0 0 0.35rem 0.35rem"
    },
    "modal-buttons-vertical modal-button:last-child:after": {
        "display": "none"
    },
    "modal-no-buttons modal-inner": {
        "borderRadius": "0.35rem"
    },
    "modal-no-buttons modal-inner:after": {
        "display": "none"
    },
    "modal-no-buttons modal-buttons": {
        "display": "none"
    },
    "actions-modal": {
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "zIndex": 11000,
        "width": "100%",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "actions-modalmodal-in": {
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "actions-modalmodal-out": {
        "zIndex": 10999,
        "WebkitTransitionDuration": "300ms",
        "transitionDuration": "300ms",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "actions-modal-group": {
        "marginTop": "0.4rem",
        "marginRight": "0.4rem",
        "marginBottom": "0.4rem",
        "marginLeft": "0.4rem"
    },
    "actions-modal-button": {
        "width": "100%",
        "textAlign": "center",
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "background": "rgba(243, 243, 243, 0.95)",
        "boxSizing": "border-box",
        "display": "block",
        "position": "relative",
        "cursor": "pointer",
        "lineHeight": "2.15rem",
        "fontSize": 1,
        "color": "#0894ec"
    },
    "actions-modal-label": {
        "width": "100%",
        "textAlign": "center",
        "fontWeight": "normal",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "background": "rgba(243, 243, 243, 0.95)",
        "boxSizing": "border-box",
        "display": "flex",
        "position": "relative",
        "fontSize": "0.7rem",
        "lineHeight": 1.3,
        "minHeight": "2.2rem",
        "paddingTop": "0.4rem",
        "paddingRight": "0.5rem",
        "paddingBottom": "0.4rem",
        "paddingLeft": "0.5rem",
        "color": "#5f646e",
        "WebkitBoxPack": "center",
        "WebkitJustifyContent": "center",
        "justifyContent": "center",
        "WebkitBoxAlign": "center",
        "WebkitAlignItems": "center",
        "alignItems": "center"
    },
    "actions-modal-button:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#d2d2d6",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "actions-modal-label:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#d2d2d6",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "actions-modal-button a": {
        "textDecoration": "none",
        "color": "inherit"
    },
    "actions-modal-label a": {
        "textDecoration": "none",
        "color": "inherit"
    },
    "actions-modal-button b": {
        "fontWeight": 500
    },
    "actions-modal-label b": {
        "fontWeight": 500
    },
    "actions-modal-buttonactions-modal-button-bold": {
        "fontWeight": 500
    },
    "actions-modal-labelactions-modal-button-bold": {
        "fontWeight": 500
    },
    "actions-modal-buttonactions-modal-button-danger": {
        "color": "#f6383a"
    },
    "actions-modal-labelactions-modal-button-danger": {
        "color": "#f6383a"
    },
    "actions-modal-buttoncolor-danger": {
        "color": "#f6383a"
    },
    "actions-modal-labelcolor-danger": {
        "color": "#f6383a"
    },
    "actions-modal-buttonbg-danger": {
        "background": "#f6383a",
        "color": "white"
    },
    "actions-modal-labelbg-danger": {
        "background": "#f6383a",
        "color": "white"
    },
    "actions-modal-buttonbg-danger:active": {
        "background": "#f00b0d"
    },
    "actions-modal-labelbg-danger:active": {
        "background": "#f00b0d"
    },
    "actions-modal-button:first-child": {
        "borderRadius": "0.2rem 0.2rem 0 0"
    },
    "actions-modal-label:first-child": {
        "borderRadius": "0.2rem 0.2rem 0 0"
    },
    "actions-modal-button:last-child": {
        "borderRadius": "0 0 0.2rem 0.2rem"
    },
    "actions-modal-label:last-child": {
        "borderRadius": "0 0 0.2rem 0.2rem"
    },
    "actions-modal-button:last-child:after": {
        "display": "none"
    },
    "actions-modal-label:last-child:after": {
        "display": "none"
    },
    "actions-modal-button:first-child:last-child": {
        "borderRadius": "0.2rem"
    },
    "actions-modal-label:first-child:last-child": {
        "borderRadius": "0.2rem"
    },
    "actions-modal-buttondisabled": {
        "opacity": 0.95,
        "color": "#8e8e93"
    },
    "actions-modal-labeldisabled": {
        "opacity": 0.95,
        "color": "#8e8e93"
    },
    "actions-modal-button:active": {
        "background": "#dcdcdc"
    },
    "actions-modal-buttonactive-state": {
        "background": "#dcdcdc"
    },
    "inputmodal-text-input": {
        "boxSizing": "border-box",
        "height": "1.5rem",
        "background": "#fff",
        "marginTop": "0.75rem",
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": "0.25rem",
        "paddingBottom": 0,
        "paddingLeft": "0.25rem",
        "border": "1px solid #a0a0a0",
        "borderRadius": "0.25rem",
        "width": "100%",
        "fontSize": "0.7rem",
        "fontFamily": "inherit",
        "display": "block",
        "boxShadow": "0 0 0 rgba(0, 0, 0, 0)",
        "WebkitAppearance": "none",
        "MozAppearance": "none",
        "appearance": "none"
    },
    "inputmodal-text-input + inputmodal-text-input": {
        "marginTop": "0.25rem"
    },
    "inputmodal-text-inputmodal-text-input-double": {
        "borderRadius": "0.25rem 0.25rem 0 0"
    },
    "inputmodal-text-inputmodal-text-input-double + inputmodal-text-input": {
        "marginTop": 0,
        "borderTop": 0,
        "borderRadius": "0 0 0.25rem 0.25rem"
    },
    "popup": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 10400,
        "background": "#fff",
        "boxSizing": "border-box",
        "display": "none",
        "overflow": "auto",
        "WebkitOverflowScrolling": "touch",
        "WebkitTransitionProperty": "-webkit-transform",
        "transitionProperty": "transform",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "login-screen": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "width": "100%",
        "height": "100%",
        "zIndex": 10400,
        "background": "#fff",
        "boxSizing": "border-box",
        "display": "none",
        "overflow": "auto",
        "WebkitOverflowScrolling": "touch",
        "WebkitTransitionProperty": "-webkit-transform",
        "transitionProperty": "transform",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "popupmodal-in": {
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "login-screenmodal-in": {
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "display": "block"
    },
    "popupmodal-out": {
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "login-screenmodal-out": {
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)",
        "display": "block"
    },
    "htmlwith-statusbar-overlay popup": {
        "height": "calc(100% - 1rem)",
        "top": 1
    },
    "htmlwith-statusbar-overlay popup-overlay": {
        "zIndex": 9800
    },
    "htmlwith-statusbar-overlay login-screen": {
        "height": "calc(100% - 1rem)",
        "top": 1
    },
    "htmlwith-statusbar-overlay popuptablet-fullscreen": {
        "height": "calc(100% - 1rem)",
        "top": 1
    },
    "modal preloader": {
        "width": "1.7rem",
        "height": "1.7rem"
    },
    "preloader-indicator-modal": {
        "position": "absolute",
        "left": "50%",
        "top": "50%",
        "paddingTop": "0.4rem",
        "paddingRight": "0.4rem",
        "paddingBottom": "0.4rem",
        "paddingLeft": "0.4rem",
        "marginLeft": "-1.25rem",
        "marginTop": "-1.25rem",
        "background": "rgba(0, 0, 0, 0.8)",
        "zIndex": 11000,
        "borderRadius": "0.25rem"
    },
    "preloader-indicator-modal preloader": {
        "display": "block",
        "width": "1.7rem",
        "height": "1.7rem"
    },
    "picker-modal": {
        "position": "fixed",
        "left": 0,
        "bottom": 0,
        "width": "100%",
        "height": 13,
        "zIndex": 11500,
        "display": "none",
        "WebkitTransitionProperty": "-webkit-transform",
        "transitionProperty": "transform",
        "background": "#cfd5da",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "picker-modalmodal-in": {
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "picker-modalmodal-out": {
        "WebkitTransitionDuration": "400ms",
        "transitionDuration": "400ms",
        "WebkitTransform": "translate3d(0, 100%, 0)",
        "transform": "translate3d(0, 100%, 0)"
    },
    "picker-modal picker-modal-inner": {
        "height": "100%",
        "position": "relative"
    },
    "picker-modal toolbar": {
        "position": "relative",
        "width": "100%"
    },
    "picker-modal toolbar:before": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "top": 0,
        "bottom": "auto",
        "right": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#999",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 0%",
        "transformOrigin": "50% 0%"
    },
    "picker-modal toolbar + picker-modal-inner": {
        "height": "calc(100% - 2.2rem)"
    },
    "picker-modalpicker-modal-inline": {
        "display": "block",
        "position": "relative",
        "background": "none",
        "zIndex": "inherit",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)"
    },
    "picker-modalpicker-modal-inline toolbar:before": {
        "display": "none"
    },
    "picker-modalpicker-modal-inline toolbar:after": {
        "content": "''",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "right": "auto",
        "top": "auto",
        "height": 1,
        "width": "100%",
        "backgroundColor": "#999",
        "display": "block",
        "zIndex": 15,
        "WebkitTransformOrigin": "50% 100%",
        "transformOrigin": "50% 100%"
    },
    "toast": {
        "background": "rgba(0, 0, 0, 0.8)",
        "borderRadius": 1,
        "color": "white",
        "paddingTop": 0,
        "paddingRight": ".8rem",
        "paddingBottom": 0,
        "paddingLeft": ".8rem",
        "height": 2,
        "lineHeight": 2,
        "fontSize": "0.8rem",
        "width": "auto"
    },
    "preloader": {
        "display": "inline-block",
        "width": 1,
        "height": 1,
        "WebkitTransformOrigin": "50%",
        "transformOrigin": "50%",
        "WebkitAnimation": "preloader-spin 1s steps(12, end) infinite",
        "animation": "preloader-spin 1s steps(12, end) infinite"
    },
    "preloader:after": {
        "display": "block",
        "content": "\"\"",
        "width": "100%",
        "height": "100%",
        "backgroundImage": "url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%236c6c6c'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");  background-position: 50%;  background-size: 100%;  background-repeat: no-repeat;}.preloader-white:after {  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20viewBox%3D'0%200%20120%20120'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20xmlns%3Axlink%3D'http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink'%3E%3Cdefs%3E%3Cline%20id%3D'l'%20x1%3D'60'%20x2%3D'60'%20y1%3D'7'%20y2%3D'27'%20stroke%3D'%23fff'%20stroke-width%3D'11'%20stroke-linecap%3D'round'%2F%3E%3C%2Fdefs%3E%3Cg%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(30%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(60%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(90%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(120%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.27'%20transform%3D'rotate(150%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.37'%20transform%3D'rotate(180%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.46'%20transform%3D'rotate(210%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.56'%20transform%3D'rotate(240%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.66'%20transform%3D'rotate(270%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.75'%20transform%3D'rotate(300%2060%2C60)'%2F%3E%3Cuse%20xlink%3Ahref%3D'%23l'%20opacity%3D'.85'%20transform%3D'rotate(330%2060%2C60)'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");}@-webkit-keyframes preloader-spin {  100% {    -webkit-transform: rotate(360deg);  }}@keyframes preloader-spin {  100% {    -webkit-transform: rotate(360deg);    transform: rotate(360deg);  }}.cards-list ul, .card .list-block ul {  background: none;}.cards-list > ul:before, .card .list-block > ul:before {  display: none;}.cards-list > ul:after, .card .list-block > ul:after {  display: none;}.card {  background: #fff;  box-shadow: 0 0.05rem 0.1rem rgba(0, 0, 0, 0.3);  margin: 0.5rem;  position: relative;  border-radius: 0.1rem;  font-size: 0.7rem;}.card .list-block, .card .content-block {  margin: 0;}.row:not(.no-gutter) .col > .card {  margin-left: 0;  margin-right: 0;}.card-content {  position: relative;}.card-content-inner {  padding: 0.75rem;  position: relative;}.card-content-inner > p:first-child {  margin-top: 0;}.card-content-inner > p:last-child {  margin-bottom: 0;}.card-content-inner > .list-block, .card-content-inner > .content-block {  margin: -0.75rem;}.card-header, .card-footer {  min-height: 2.2rem;  position: relative;  padding: 0.5rem 0.75rem;  box-sizing: border-box;  display: -webkit-box;  display: -webkit-flex;  display: flex;  -webkit-box-pack: justify;  -webkit-justify-content: space-between;  justify-content: space-between;  -webkit-box-align: center;  -webkit-align-items: center;  align-items: center;}.card-header[valign=\"top\"], .card-footer[valign=\"top\"] {  -webkit-box-align: start;  -webkit-align-items: flex-start;  align-items: flex-start;}.card-header[valign=\"bottom\"], .card-footer[valign=\"bottom\"] {  -webkit-box-align: end;  -webkit-align-items: flex-end;  align-items: flex-end;}.card-header a.link, .card-footer a.link {  line-height: 2.2rem;  height: 2.2rem;  text-decoration: none;  position: relative;  margin-top: -0.5rem;  margin-bottom: -0.5rem;  display: -webkit-box;  display: -webkit-flex;  display: flex;  -webkit-box-pack: start;  -webkit-justify-content: flex-start;  justify-content: flex-start;  -webkit-box-align: center;  -webkit-align-items: center;  align-items: center;  -webkit-transition-duration: 300ms;  transition-duration: 300ms;}html:not(.watch-active-state) .card-header a.link:active, html:not(.watch-active-state) .card-footer a.link:active, .card-header a.link.active-state, .card-footer a.link.active-state {  opacity: 0.3;  -webkit-transition-duration: 0ms;  transition-duration: 0ms;}.card-header a.link i + span, .card-footer a.link i + span, .card-header a.link i + i, .card-footer a.link i + i, .card-header a.link span + i, .card-footer a.link span + i, .card-header a.link span + span, .card-footer a.link span + span {  margin-left: 0.35rem;}.card-header a.link i.icon, .card-footer a.link i.icon {  display: block;}.card-header a.icon-only, .card-footer a.icon-only {  min-width: 2.2rem;  display: -webkit-box;  display: -webkit-flex;  display: flex;  -webkit-box-pack: center;  -webkit-justify-content: center;  justify-content: center;  -webkit-box-align: center;  -webkit-align-items: center;  align-items: center;  margin: 0;}.card-header {  border-radius: 0.1rem 0.1rem 0 0;  font-size: 0.85rem;}.card-header:after {  content: '';  position: absolute;  left: 0;  bottom: 0;  right: auto;  top: auto;  height: 1px;  width: 100%;  background-color: #e1e1e1;  display: block;  z-index: 15;  -webkit-transform-origin: 50% 100%;  transform-origin: 50% 100%;}@media only screen and (-webkit-min-device-pixel-ratio: 2) {  .card-header:after {    -webkit-transform: scaleY(0.5);    transform: scaleY(0.5);  }}@media only screen and (-webkit-min-device-pixel-ratio: 3) {  .card-header:after {    -webkit-transform: scaleY(0.33);    transform: scaleY(0.33);  }}.card-header .card-cover {  width: 100%;  display: block;}.card-header.no-border:after {  display: none;}.card-header.no-padding {  padding: 0;}.card-footer {  border-radius: 0 0 0.1rem 0.1rem;  color: #5f646e;}.card-footer:before {  content: '';  position: absolute;  left: 0;  top: 0;  bottom: auto;  right: auto;  height: 1px;  width: 100%;  background-color: #e1e1e1;  display: block;  z-index: 15;  -webkit-transform-origin: 50% 0%;  transform-origin: 50% 0%;}@media only screen and (-webkit-min-device-pixel-ratio: 2) {  .card-footer:before {    -webkit-transform: scaleY(0.5);    transform: scaleY(0.5);  }}@media only screen and (-webkit-min-device-pixel-ratio: 3) {  .card-footer:before {    -webkit-transform: scaleY(0.33);    transform: scaleY(0.33);  }}.card-footer.no-border:before {  display: none;}.facebook-card .card-header {  display: block;  padding: 0.5rem;}.facebook-card .facebook-avatar {  float: left;}.facebook-card .facebook-name {  margin-left: 2.2rem;  font-size: 0.7rem;  font-weight: 500;}.facebook-card .facebook-date {  margin-left: 2.2rem;  font-size: 0.65rem;  color: #5f646e;}.facebook-card .card-footer {  background: #fafafa;}.facebook-card .card-footer a {  color: #5f646e;  font-weight: 500;}.facebook-card .card-content img {  display: block;}.facebook-card .card-content-inner {  padding: 0.75rem 0.5rem;}.panel-overlay {  position: absolute;  left: 0;  top: 0;  width: 100%;  height: 100%;  background: rgba(0, 0, 0, 0);  opacity: 0;  z-index: 5999;  display: none;}.picker-columns {  width: 100%;  height: 13rem;  z-index: 11500;}.picker-columns.picker-modal-inline {  height: 10rem;}@media (orientation: landscape) and (max-height: 415px) {  .picker-columns:not(.picker-modal-inline) {    height: 10rem;  }}.picker-items {  display: -webkit-box;  display: -webkit-flex;  display: flex;  -webkit-box-pack: center;  -webkit-justify-content: center;  justify-content: center;  padding: 0;  text-align: right;  font-size: 1.2rem;  -webkit-mask-box-image: -webkit-linear-gradient(bottom, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);  -webkit-mask-box-image: linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent);}.bar + .picker-items {  height: 10.8rem;}.picker-items-col {  overflow: hidden;  position: relative;  max-height: 100%;}.picker-items-col.picker-items-col-left {  text-align: left;}.picker-items-col.picker-items-col-center {  text-align: center;}.picker-items-col.picker-items-col-right {  text-align: right;}.picker-items-col.picker-items-col-divider {  color: #3d4145;  display: -webkit-box;  display: -webkit-flex;  display: flex;  -webkit-box-align: center;  -webkit-align-items: center;  align-items: center;}.picker-items-col-normal {  width: 100%;}.picker-items-col-wrapper {  -webkit-transition: 300ms;  transition: 300ms;  -webkit-transition-timing-function: ease-out;  transition-timing-function: ease-out;}.picker-item {  height: 36px;  line-height: 36px;  padding: 0 10px;  white-space: nowrap;  position: relative;  overflow: hidden;  text-overflow: ellipsis;  color: #999;  left: 0;  top: 0;  width: 100%;  box-sizing: border-box;  -webkit-transition: 300ms;  transition: 300ms;}.picker-items-col-absolute .picker-item {  position: absolute;}.picker-item.picker-item-far {  pointer-events: none;}.picker-item.picker-selected {  color: #3d4145;  -webkit-transform: translate3d(0, 0, 0);  transform: translate3d(0, 0, 0);  -webkit-transform: rotateX(0deg);  transform: rotateX(0deg);}.picker-center-highlight {  height: 36px;  box-sizing: border-box;  position: absolute;  left: 0;  width: 100%;  top: 50%;  margin-top: -18px;  pointer-events: none;}.picker-center-highlight:before {  content: '';  position: absolute;  left: 0;  top: 0;  bottom: auto;  right: auto;  height: 1px;  width: 100%;  background-color: #a8abb0;  display: block;  z-index: 15;  -webkit-transform-origin: 50% 0%;  transform-origin: 50% 0%;}@media only screen and (-webkit-min-device-pixel-ratio: 2) {  .picker-center-highlight:before {    -webkit-transform: scaleY(0.5);    transform: scaleY(0.5);  }}@media only screen and (-webkit-min-device-pixel-ratio: 3) {  .picker-center-highlight:before {    -webkit-transform: scaleY(0.33);    transform: scaleY(0.33);  }}.picker-center-highlight:after {  content: '';  position: absolute;  left: 0;  bottom: 0;  right: auto;  top: auto;  height: 1px;  width: 100%;  background-color: #a8abb0;  display: block;  z-index: 15;  -webkit-transform-origin: 50% 100%;  transform-origin: 50% 100%;}@media only screen and (-webkit-min-device-pixel-ratio: 2) {  .picker-center-highlight:after {    -webkit-transform: scaleY(0.5);    transform: scaleY(0.5);  }}@media only screen and (-webkit-min-device-pixel-ratio: 3) {  .picker-center-highlight:after {    -webkit-transform: scaleY(0.33);    transform: scaleY(0.33);  }}.picker-3d .picker-items {  overflow: hidden;  -webkit-perspective: 1200px;  perspective: 1200px;}.picker-3d .picker-items-col, .picker-3d .picker-items-col-wrapper, .picker-3d .picker-item {  -webkit-transform-style: preserve-3d;  transform-style: preserve-3d;}.picker-3d .picker-items-col {  overflow: visible;}.picker-3d .picker-item {  -webkit-transform-origin: center center -110px;  transform-origin: center center -110px;  -webkit-backface-visibility: hidden;  backface-visibility: hidden;  -webkit-transition-timing-function: ease-out;  transition-timing-function: ease-out;}.picker-modal .bar {  position: relative;  top: 0;}.picker-modal .bar:before {  content: '';  position: absolute;  left: 0;  top: 0;  bottom: auto;  right: auto;  height: 1px;  width: 100%;  background-color: #a8abb0;  display: block;  z-index: 15;  -webkit-transform-origin: 50% 0%;  transform-origin: 50% 0%;}@media only screen and (-webkit-min-device-pixel-ratio: 2) {  .picker-modal .bar:before {    -webkit-transform: scaleY(0.5);    transform: scaleY(0.5);  }}@media only screen and (-webkit-min-device-pixel-ratio: 3) {  .picker-modal .bar:before {    -webkit-transform: scaleY(0.33);    transform: scaleY(0.33);  }}.picker-modal .bar:after {  content: '';  position: absolute;  left: 0;  bottom: 0;  right: auto;  top: auto;  height: 1px;  width: 100%;  background-color: #a8abb0;  display: block;  z-index: 15;  -webkit-transform-origin: 50% 100%;  transform-origin: 50% 100%;}@media only screen and (-webkit-min-device-pixel-ratio: 2) {  .picker-modal .bar:after {    -webkit-transform: scaleY(0.5);    transform: scaleY(0.5);  }}@media only screen and (-webkit-min-device-pixel-ratio: 3) {  .picker-modal .bar:after {    -webkit-transform: scaleY(0.33);    transform: scaleY(0.33);  }}.picker-modal .bar .title {  color: #5f646e;  font-weight: normal;}.city-picker .col-province {  width: 5rem;}.city-picker .col-city {  width: 6rem;}.city-picker .col-district {  width: 5rem;}.icon {  font-family: iconfont;  font-style: normal;  display: inline-block;  vertical-align: middle;  background-size: 100% auto;  background-position: center;  -webkit-font-smoothing: asntialiased;  -webkit-text-stroke-width: .2px;  -moz-osx-font-smoothing: grayscale;}.icon-plan:before {  font-family: iconfont;  content: \"\\e613\";}.icon-histogram:before {  font-family: iconfont;  content: \"\\e624\";}.icon-piechart:before {  font-family: iconfont;  content: \"\\e640\";}.icon-clock2:before {  font-family: iconfont;  content: \"\\e63f\";}.icon-golds:before {  font-family: iconfont;  content: \"\\e641\";}.icon-principal:before {  font-family: iconfont;  content: \"\\e636\";}.icon-profit:before {  font-family: iconfont;  content: \"\\e637\";}.icon-notice:before {  font-family: iconfont;  content: \"\\e63c\";}.icon-heart:before {  font-family: iconfont;  content: \"\\e620\";}.icon-emptyheart:before {  font-family: iconfont;  content: \"\\e623\";}.icon-right2:before {  font-family: iconfont;  content: \"\\e62d\";}.icon-wrong2:before {  font-family: iconfont;  content: \"\\e632\";}.icon-cancel2:before {  font-family: iconfont;  content: \"\\e600\";}.icon-tasks:before {  content: \"\\e601\";}.icon-me:before {  content: \"\\e602\";}.icon-shouyimingxi:before {  content: \"\\e603\";}.icon-mytask:before {  content: \"\\e604\";}.icon-more:before {  content: \"\\e605\";}.icon-task:before {  content: \"\\e606\";}.icon-invite:before {  content: \"\\e608\";}.icon-left:before {  content: \"\\e609\";}.icon-shouyi:before {  content: \"\\e60a\";}.icon-home:before {  content: \"\\e60b\";}.icon-withdraw:before {  content: \"\\e60c\";}.icon-invitefriend:before {  content: \"\\e60d\";}.icon-rank:before {  content: \"\\e60e\";}.icon-dianji:before {  content: \"\\e60f\";}.icon-end:before {  content: \"\\e610\";}.icon-zhuyi2:before {  content: \"\\e614\";}.icon-get:before {  content: \"\\e615\";}.icon-next {  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2015%2015'%3E%3Cg%3E%3Cpath%20fill%3D'%23007aff'%20d%3D'M1%2C1.6l11.8%2C5.8L1%2C13.4V1.6%20M0%2C0v15l15-7.6L0%2C0L0%2C0z'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\");}.icon-prev {  background-image: url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2015%2015'%3E%3Cg%3E%3Cpath%20fill%3D'%23007aff'%20d%3D'M14%2C1.6v11.8L2.2%2C7.6L14%2C1.6%20M15%2C0L0%2C7.6L15%2C15V0L15%2C0z'%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E\")"
    },
    "ball-beat": {
        "top": "50%",
        "left": "50%",
        "zIndex": 11000,
        "marginTop": "-.55rem",
        "marginLeft": "-1.5rem",
        "position": "absolute"
    },
    "ball-beat > div": {
        "backgroundColor": "rgb(216, 65, 65)",
        "width": 1,
        "height": 1,
        "borderRadius": "100%",
        "marginTop": ".1rem",
        "marginRight": ".1rem",
        "marginBottom": ".1rem",
        "marginLeft": ".1rem",
        "WebkitAnimationFillMode": "both",
        "animationFillMode": "both",
        "display": "inline-block",
        "WebkitAnimation": "ball-beat 0.7s 0s infinite linear",
        "animation": "ball-beat 0.7s 0s infinite linear"
    },
    "ball-beat > div:nth-child(2n-1)": {
        "WebkitAnimationDelay": "-0.35s !important",
        "animationDelay": "-0.35s !important"
    }
});