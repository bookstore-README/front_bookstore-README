"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var CheckIcon_svg_1 = require("@/public/icons/CheckIcon.svg");
var RightArrow_svg_1 = require("@/public/icons/RightArrow.svg");
var TERMS_TITLES = [
    '만 14세이상 입니다',
    '이용약관',
    '개인정보 수집 및 이용동의',
];
function TermsCheckbox() {
    var _a = react_hook_form_1.useFormContext(), register = _a.register, setValue = _a.setValue;
    var _b = react_1.useState(TERMS_TITLES.reduce(function (acc, title) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[title] = false, _a)));
    }, {})), checkedStates = _b[0], setCheckedStates = _b[1];
    var handleSelectAll = function (e) {
        var isChecked = e.currentTarget.checked;
        setCheckedStates(TERMS_TITLES.reduce(function (acc, termsTitle) {
            var _a;
            return (__assign(__assign({}, acc), (_a = {}, _a[termsTitle] = isChecked, _a)));
        }, {}));
    };
    var handleIndividualCheck = function (termsTitle) {
        setCheckedStates(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[termsTitle] = !prev[termsTitle], _a)));
        });
    };
    var handleOpenModal = function () {
        //모달을 열거예용
    };
    react_1.useEffect(function () {
        var isAllChecked = Object.values(checkedStates).every(Boolean);
        setValue('selectAll', isAllChecked);
    }, [checkedStates, setValue]);
    return (react_1["default"].createElement("div", { className: "w-360 mobile:w-330" },
        react_1["default"].createElement("span", { className: "font-bold inline-block pb-8" }, "\uC57D\uAD00\uB3D9\uC758"),
        react_1["default"].createElement("div", { className: "h-48 flex items-center border-0 border-b-[1px] border-b-[#DBDBDB] gap-8 relative" },
            react_1["default"].createElement("label", { htmlFor: "selectAll", className: "text-15 font-medium" },
                react_1["default"].createElement(image_1["default"], { src: CheckIcon_svg_1["default"], alt: "\uCCB4\uD06C\uC544\uC774\uCF58", width: 10, height: 6, className: "absolute z-10 top-20 left-5" }),
                react_1["default"].createElement("input", __assign({ type: "checkbox", id: "selectAll" }, register('selectAll'), { checked: Object.values(checkedStates).every(Boolean), onChange: handleSelectAll, className: "p-1 relative float-left mr-8 mt-0.5 w-20 h-20 rounded-full border-2 border-solid\r\n              border-gray-3 checked:bg-green checked:border-0 appearance-none" })),
                "\uC804\uCCB4 \uB3D9\uC758")),
        react_1["default"].createElement("div", null, TERMS_TITLES.map(function (termsTitle) { return (react_1["default"].createElement("div", { key: termsTitle, className: "h-48 flex items-center justify-between" },
            react_1["default"].createElement("div", { className: "flex items-center relative" },
                react_1["default"].createElement("label", { htmlFor: "id." + termsTitle, className: "text-[#767676] text-15" },
                    react_1["default"].createElement(image_1["default"], { src: CheckIcon_svg_1["default"], alt: "\uCCB4\uD06C\uC544\uC774\uCF58", width: 10, height: 6, className: "absolute z-10 top-7 left-5" }),
                    react_1["default"].createElement("input", __assign({ id: "id." + termsTitle }, register("id." + termsTitle), { type: "checkbox", checked: checkedStates[termsTitle], onChange: function () { return handleIndividualCheck(termsTitle); }, className: "p-1 relative float-left mr-8 mt-0.5 w-20 h-20 rounded-full border-2 border-solid\r\n                    border-gray-3 checked:bg-green checked:border-0 appearance-none" })),
                    termsTitle)),
            react_1["default"].createElement("button", { className: "pr-4", onClick: handleOpenModal },
                react_1["default"].createElement(image_1["default"], { src: RightArrow_svg_1["default"], width: 18, height: 18, alt: "\uC57D\uAD00\uB0B4\uC6A9 \uC804\uCCB4\uBCF4\uAE30 \uBC84\uD2BC" })))); }))));
}
exports["default"] = TermsCheckbox;
