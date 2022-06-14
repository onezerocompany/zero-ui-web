/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ButtonsSection {
    }
    interface ColorsSection {
    }
    interface ContainerSection {
    }
    interface GradientsSection {
    }
    interface InputsSection {
    }
    interface TypographySection {
    }
    interface ZeroBar {
        "elevation": number;
        "titleText"?: string;
    }
    interface ZeroButton {
        "action"?: () => void;
        "darkScheme"?: string;
        "direction": string;
        "edgeBrightness": number;
        "edgeGlow": number;
        "edgeThickness": number;
        "elevation": number;
        "fill": boolean;
        "flex": boolean;
        "fontFamily": string;
        "glowAmount": number;
        "icon"?: string;
        "label"?: string;
        "lightScheme"?: string;
        "link"?: string;
        "neuness": number;
        "padding": number;
        "paddingRatio": number;
        "roundedCorners": number;
        "shadowProminence": number;
        "size": number;
        "spacing": number;
        "targetElement"?: string;
        "weight": number;
    }
    interface ZeroContainer {
        "align": string;
        "background": string;
        "backgroundBlur": number;
        "backgroundGradient"?: string;
        "backgroundTranslucency": number;
        "darkScheme"?: string;
        "direction": 'vertical' | 'horizontal';
        "edgeBrightness": number;
        "edgeGlow": number;
        "edgeThickness": number;
        "elevation": number;
        "fill": boolean;
        "flex": boolean;
        "flexFill": boolean;
        "followAmount": number;
        "glowAmount": number;
        "height": string;
        "lightScheme"?: string;
        "maxHeight": string;
        "maxWidth": string;
        "minHeight": string;
        "minWidth": string;
        "neuness": number;
        "padding": number;
        "paddingRatio": number;
        "roundedCorners": number;
        "shadowProminence": number;
        "spacing": number;
        "width": string;
    }
    interface ZeroDivider {
        "gradient"?: string;
        "spacing": number;
        "thickness": number;
    }
    interface ZeroGrid {
        "minWidth": string;
        "spacing": number;
    }
    interface ZeroHeader {
        "backgroundImage"?: string;
        "backgroundOpacity": number;
        "backgroundVideo"?: string;
    }
    interface ZeroInput {
        "direction": 'horizontal' | 'vertical' | 'auto';
        "elevation": number;
        "icon"?: string;
        "label": string;
        "max": number;
        "min": number;
        "name": string;
        "padding": number;
        "paddingRatio": number;
        "placeholder": string;
        "required": boolean;
        "showErrorBeforeType": boolean;
        "step": number;
        "type": string;
        "validate": boolean;
        "validator"?: (value: string) => boolean | string;
        "value": string | number;
        "valueTemplate": string;
    }
    interface ZeroScaffold {
        "darkScheme": string;
        "font": string;
        "lightScheme": string;
    }
    interface ZeroSection {
        "gradient"?: string;
        "icon"?: string;
        "sectionTitle": string;
    }
    interface ZeroText {
        "align": 'left' | 'center' | 'right';
        "capitalize": boolean;
        "color"?: string;
        "darkScheme"?: string;
        "family"?: string;
        "gradient"?: string;
        "icon"?: string;
        "iconPosition": 'leading' | 'trailing';
        "letterSpacing"?: number;
        "lightScheme"?: string;
        "lineHeight"?: number;
        "lowercase": boolean;
        "padding": number;
        "paddingRatio": number;
        "size"?: number;
        "spacing": number;
        "textStyle"?: string;
        "underline": boolean;
        "uppercase": boolean;
        "weight"?: number;
    }
}
declare global {
    interface HTMLButtonsSectionElement extends Components.ButtonsSection, HTMLStencilElement {
    }
    var HTMLButtonsSectionElement: {
        prototype: HTMLButtonsSectionElement;
        new (): HTMLButtonsSectionElement;
    };
    interface HTMLColorsSectionElement extends Components.ColorsSection, HTMLStencilElement {
    }
    var HTMLColorsSectionElement: {
        prototype: HTMLColorsSectionElement;
        new (): HTMLColorsSectionElement;
    };
    interface HTMLContainerSectionElement extends Components.ContainerSection, HTMLStencilElement {
    }
    var HTMLContainerSectionElement: {
        prototype: HTMLContainerSectionElement;
        new (): HTMLContainerSectionElement;
    };
    interface HTMLGradientsSectionElement extends Components.GradientsSection, HTMLStencilElement {
    }
    var HTMLGradientsSectionElement: {
        prototype: HTMLGradientsSectionElement;
        new (): HTMLGradientsSectionElement;
    };
    interface HTMLInputsSectionElement extends Components.InputsSection, HTMLStencilElement {
    }
    var HTMLInputsSectionElement: {
        prototype: HTMLInputsSectionElement;
        new (): HTMLInputsSectionElement;
    };
    interface HTMLTypographySectionElement extends Components.TypographySection, HTMLStencilElement {
    }
    var HTMLTypographySectionElement: {
        prototype: HTMLTypographySectionElement;
        new (): HTMLTypographySectionElement;
    };
    interface HTMLZeroBarElement extends Components.ZeroBar, HTMLStencilElement {
    }
    var HTMLZeroBarElement: {
        prototype: HTMLZeroBarElement;
        new (): HTMLZeroBarElement;
    };
    interface HTMLZeroButtonElement extends Components.ZeroButton, HTMLStencilElement {
    }
    var HTMLZeroButtonElement: {
        prototype: HTMLZeroButtonElement;
        new (): HTMLZeroButtonElement;
    };
    interface HTMLZeroContainerElement extends Components.ZeroContainer, HTMLStencilElement {
    }
    var HTMLZeroContainerElement: {
        prototype: HTMLZeroContainerElement;
        new (): HTMLZeroContainerElement;
    };
    interface HTMLZeroDividerElement extends Components.ZeroDivider, HTMLStencilElement {
    }
    var HTMLZeroDividerElement: {
        prototype: HTMLZeroDividerElement;
        new (): HTMLZeroDividerElement;
    };
    interface HTMLZeroGridElement extends Components.ZeroGrid, HTMLStencilElement {
    }
    var HTMLZeroGridElement: {
        prototype: HTMLZeroGridElement;
        new (): HTMLZeroGridElement;
    };
    interface HTMLZeroHeaderElement extends Components.ZeroHeader, HTMLStencilElement {
    }
    var HTMLZeroHeaderElement: {
        prototype: HTMLZeroHeaderElement;
        new (): HTMLZeroHeaderElement;
    };
    interface HTMLZeroInputElement extends Components.ZeroInput, HTMLStencilElement {
    }
    var HTMLZeroInputElement: {
        prototype: HTMLZeroInputElement;
        new (): HTMLZeroInputElement;
    };
    interface HTMLZeroScaffoldElement extends Components.ZeroScaffold, HTMLStencilElement {
    }
    var HTMLZeroScaffoldElement: {
        prototype: HTMLZeroScaffoldElement;
        new (): HTMLZeroScaffoldElement;
    };
    interface HTMLZeroSectionElement extends Components.ZeroSection, HTMLStencilElement {
    }
    var HTMLZeroSectionElement: {
        prototype: HTMLZeroSectionElement;
        new (): HTMLZeroSectionElement;
    };
    interface HTMLZeroTextElement extends Components.ZeroText, HTMLStencilElement {
    }
    var HTMLZeroTextElement: {
        prototype: HTMLZeroTextElement;
        new (): HTMLZeroTextElement;
    };
    interface HTMLElementTagNameMap {
        "buttons-section": HTMLButtonsSectionElement;
        "colors-section": HTMLColorsSectionElement;
        "container-section": HTMLContainerSectionElement;
        "gradients-section": HTMLGradientsSectionElement;
        "inputs-section": HTMLInputsSectionElement;
        "typography-section": HTMLTypographySectionElement;
        "zero-bar": HTMLZeroBarElement;
        "zero-button": HTMLZeroButtonElement;
        "zero-container": HTMLZeroContainerElement;
        "zero-divider": HTMLZeroDividerElement;
        "zero-grid": HTMLZeroGridElement;
        "zero-header": HTMLZeroHeaderElement;
        "zero-input": HTMLZeroInputElement;
        "zero-scaffold": HTMLZeroScaffoldElement;
        "zero-section": HTMLZeroSectionElement;
        "zero-text": HTMLZeroTextElement;
    }
}
declare namespace LocalJSX {
    interface ButtonsSection {
    }
    interface ColorsSection {
    }
    interface ContainerSection {
    }
    interface GradientsSection {
    }
    interface InputsSection {
    }
    interface TypographySection {
    }
    interface ZeroBar {
        "elevation"?: number;
        "titleText"?: string;
    }
    interface ZeroButton {
        "action"?: () => void;
        "darkScheme"?: string;
        "direction"?: string;
        "edgeBrightness"?: number;
        "edgeGlow"?: number;
        "edgeThickness"?: number;
        "elevation"?: number;
        "fill"?: boolean;
        "flex"?: boolean;
        "fontFamily"?: string;
        "glowAmount"?: number;
        "icon"?: string;
        "label"?: string;
        "lightScheme"?: string;
        "link"?: string;
        "neuness"?: number;
        "padding"?: number;
        "paddingRatio"?: number;
        "roundedCorners"?: number;
        "shadowProminence"?: number;
        "size"?: number;
        "spacing"?: number;
        "targetElement"?: string;
        "weight"?: number;
    }
    interface ZeroContainer {
        "align"?: string;
        "background"?: string;
        "backgroundBlur"?: number;
        "backgroundGradient"?: string;
        "backgroundTranslucency"?: number;
        "darkScheme"?: string;
        "direction"?: 'vertical' | 'horizontal';
        "edgeBrightness"?: number;
        "edgeGlow"?: number;
        "edgeThickness"?: number;
        "elevation"?: number;
        "fill"?: boolean;
        "flex"?: boolean;
        "flexFill"?: boolean;
        "followAmount"?: number;
        "glowAmount"?: number;
        "height"?: string;
        "lightScheme"?: string;
        "maxHeight"?: string;
        "maxWidth"?: string;
        "minHeight"?: string;
        "minWidth"?: string;
        "neuness"?: number;
        "padding"?: number;
        "paddingRatio"?: number;
        "roundedCorners"?: number;
        "shadowProminence"?: number;
        "spacing"?: number;
        "width"?: string;
    }
    interface ZeroDivider {
        "gradient"?: string;
        "spacing"?: number;
        "thickness"?: number;
    }
    interface ZeroGrid {
        "minWidth"?: string;
        "spacing"?: number;
    }
    interface ZeroHeader {
        "backgroundImage"?: string;
        "backgroundOpacity"?: number;
        "backgroundVideo"?: string;
    }
    interface ZeroInput {
        "direction"?: 'horizontal' | 'vertical' | 'auto';
        "elevation"?: number;
        "icon"?: string;
        "label"?: string;
        "max"?: number;
        "min"?: number;
        "name"?: string;
        "onValueChanged"?: (event: CustomEvent<string>) => void;
        "padding"?: number;
        "paddingRatio"?: number;
        "placeholder"?: string;
        "required"?: boolean;
        "showErrorBeforeType"?: boolean;
        "step"?: number;
        "type"?: string;
        "validate"?: boolean;
        "validator"?: (value: string) => boolean | string;
        "value"?: string | number;
        "valueTemplate"?: string;
    }
    interface ZeroScaffold {
        "darkScheme"?: string;
        "font"?: string;
        "lightScheme"?: string;
    }
    interface ZeroSection {
        "gradient"?: string;
        "icon"?: string;
        "sectionTitle": string;
    }
    interface ZeroText {
        "align"?: 'left' | 'center' | 'right';
        "capitalize"?: boolean;
        "color"?: string;
        "darkScheme"?: string;
        "family"?: string;
        "gradient"?: string;
        "icon"?: string;
        "iconPosition"?: 'leading' | 'trailing';
        "letterSpacing"?: number;
        "lightScheme"?: string;
        "lineHeight"?: number;
        "lowercase"?: boolean;
        "padding"?: number;
        "paddingRatio"?: number;
        "size"?: number;
        "spacing"?: number;
        "textStyle"?: string;
        "underline"?: boolean;
        "uppercase"?: boolean;
        "weight"?: number;
    }
    interface IntrinsicElements {
        "buttons-section": ButtonsSection;
        "colors-section": ColorsSection;
        "container-section": ContainerSection;
        "gradients-section": GradientsSection;
        "inputs-section": InputsSection;
        "typography-section": TypographySection;
        "zero-bar": ZeroBar;
        "zero-button": ZeroButton;
        "zero-container": ZeroContainer;
        "zero-divider": ZeroDivider;
        "zero-grid": ZeroGrid;
        "zero-header": ZeroHeader;
        "zero-input": ZeroInput;
        "zero-scaffold": ZeroScaffold;
        "zero-section": ZeroSection;
        "zero-text": ZeroText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "buttons-section": LocalJSX.ButtonsSection & JSXBase.HTMLAttributes<HTMLButtonsSectionElement>;
            "colors-section": LocalJSX.ColorsSection & JSXBase.HTMLAttributes<HTMLColorsSectionElement>;
            "container-section": LocalJSX.ContainerSection & JSXBase.HTMLAttributes<HTMLContainerSectionElement>;
            "gradients-section": LocalJSX.GradientsSection & JSXBase.HTMLAttributes<HTMLGradientsSectionElement>;
            "inputs-section": LocalJSX.InputsSection & JSXBase.HTMLAttributes<HTMLInputsSectionElement>;
            "typography-section": LocalJSX.TypographySection & JSXBase.HTMLAttributes<HTMLTypographySectionElement>;
            "zero-bar": LocalJSX.ZeroBar & JSXBase.HTMLAttributes<HTMLZeroBarElement>;
            "zero-button": LocalJSX.ZeroButton & JSXBase.HTMLAttributes<HTMLZeroButtonElement>;
            "zero-container": LocalJSX.ZeroContainer & JSXBase.HTMLAttributes<HTMLZeroContainerElement>;
            "zero-divider": LocalJSX.ZeroDivider & JSXBase.HTMLAttributes<HTMLZeroDividerElement>;
            "zero-grid": LocalJSX.ZeroGrid & JSXBase.HTMLAttributes<HTMLZeroGridElement>;
            "zero-header": LocalJSX.ZeroHeader & JSXBase.HTMLAttributes<HTMLZeroHeaderElement>;
            "zero-input": LocalJSX.ZeroInput & JSXBase.HTMLAttributes<HTMLZeroInputElement>;
            "zero-scaffold": LocalJSX.ZeroScaffold & JSXBase.HTMLAttributes<HTMLZeroScaffoldElement>;
            "zero-section": LocalJSX.ZeroSection & JSXBase.HTMLAttributes<HTMLZeroSectionElement>;
            "zero-text": LocalJSX.ZeroText & JSXBase.HTMLAttributes<HTMLZeroTextElement>;
        }
    }
}
