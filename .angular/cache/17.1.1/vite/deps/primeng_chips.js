import {
  InputTextModule
} from "./chunk-PMTDWZGE.js";
import {
  TimesCircleIcon
} from "./chunk-PCGXH4W7.js";
import {
  TimesIcon
} from "./chunk-FJQYFPFU.js";
import "./chunk-XUWLZM5M.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-3JNXKVNF.js";
import {
  PrimeTemplate,
  SharedModule,
  UniqueComponentId
} from "./chunk-MGAAQGVK.js";
import {
  CommonModule,
  DOCUMENT,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-NUQZK25K.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation$1,
  forwardRef,
  setClassMetadata,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-JJHIOCLO.js";
import "./chunk-DGSSWR5S.js";
import "./chunk-YIAFZ24P.js";
import "./chunk-RDY66B4C.js";

// node_modules/primeng/fesm2022/primeng-chips.mjs
var _c0 = ["inputtext"];
var _c1 = ["container"];
function Chips_li_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Chips_li_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 12);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ɵɵnextContext().$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵattribute("data-pc-section", "label");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r8.field ? ctx_r8.resolveFieldData(item_r4, ctx_r8.field) : item_r4);
  }
}
function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesCircleIcon", 15);
    ɵɵlistener("click", function Chips_li_3_ng_container_4_TimesCircleIcon_1_Template_TimesCircleIcon_click_0_listener($event) {
      ɵɵrestoreView(_r15);
      const i_r5 = ɵɵnextContext(2).index;
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.removeItem($event, i_r5));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-chips-token-icon");
    ɵɵattribute("data-pc-section", "removeTokenIcon")("aria-hidden", true);
  }
}
function Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chips_li_3_ng_container_4_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Chips_li_3_ng_container_4_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_3_ng_container_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 16);
    ɵɵlistener("click", function Chips_li_3_ng_container_4_span_2_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r20);
      const i_r5 = ɵɵnextContext(2).index;
      const ctx_r18 = ɵɵnextContext();
      return ɵɵresetView(ctx_r18.removeItem($event, i_r5));
    });
    ɵɵtemplate(1, Chips_li_3_ng_container_4_span_2_1_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(3);
    ɵɵattribute("data-pc-section", "removeTokenIcon")("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r12.removeTokenIconTemplate);
  }
}
function Chips_li_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Chips_li_3_ng_container_4_TimesCircleIcon_1_Template, 1, 3, "TimesCircleIcon", 13)(2, Chips_li_3_ng_container_4_span_2_Template, 2, 3, "span", 14);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r9 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r9.removeTokenIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r9.removeTokenIconTemplate);
  }
}
var _c2 = (a1) => ({
  "p-chips-token": true,
  "p-focus": a1
});
var _c3 = (a0) => ({
  $implicit: a0
});
function Chips_li_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 8, 9);
    ɵɵlistener("click", function Chips_li_3_Template_li_click_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r22);
      const item_r4 = restoredCtx.$implicit;
      const ctx_r21 = ɵɵnextContext();
      return ɵɵresetView(ctx_r21.onItemClick($event, item_r4));
    });
    ɵɵtemplate(2, Chips_li_3_ng_container_2_Template, 1, 0, "ng-container", 10)(3, Chips_li_3_span_3_Template, 2, 2, "span", 11)(4, Chips_li_3_ng_container_4_Template, 3, 2, "ng-container", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(12, _c2, ctx_r1.focusedIndex === i_r5));
    ɵɵattribute("id", ctx_r1.id + "_chips_item_" + i_r5)("ariaLabel", item_r4)("aria-selected", true)("aria-setsize", ctx_r1.value.length)("aria-posinset", i_r5 + 1)("data-p-focused", ctx_r1.focusedIndex === i_r5)("data-pc-section", "token");
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(14, _c3, item_r4));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.disabled);
  }
}
function Chips_li_7_TimesIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "TimesIcon", 15);
    ɵɵlistener("click", function Chips_li_7_TimesIcon_1_Template_TimesIcon_click_0_listener() {
      ɵɵrestoreView(_r26);
      const ctx_r25 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r25.clear());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-chips-clear-icon");
  }
}
function Chips_li_7_span_2_1_ng_template_0_Template(rf, ctx) {
}
function Chips_li_7_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Chips_li_7_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Chips_li_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 19);
    ɵɵlistener("click", function Chips_li_7_span_2_Template_span_click_0_listener() {
      ɵɵrestoreView(_r30);
      const ctx_r29 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r29.clear());
    });
    ɵɵtemplate(1, Chips_li_7_span_2_1_Template, 1, 0, null, 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r24 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r24.clearIconTemplate);
  }
}
function Chips_li_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li");
    ɵɵtemplate(1, Chips_li_7_TimesIcon_1_Template, 1, 1, "TimesIcon", 13)(2, Chips_li_7_span_2_Template, 2, 1, "span", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r3.clearIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r3.clearIconTemplate);
  }
}
var _c4 = (a1, a2, a3, a4) => ({
  "p-chips p-component p-input-wrapper": true,
  "p-disabled": a1,
  "p-focus": a2,
  "p-inputwrapper-filled": a3,
  "p-inputwrapper-focus": a4
});
var _c5 = () => ({
  "p-inputtext p-chips-multiple-container": true
});
var _c6 = (a0) => ({
  "p-chips-clearable": a0
});
var CHIPS_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Chips),
  multi: true
};
var Chips = class _Chips {
  document;
  el;
  cd;
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Style class of the element.
   * @group Props
   */
  styleClass;
  /**
   * When present, it specifies that the element should be disabled.
   * @group Props
   */
  disabled;
  /**
   * Name of the property to display on a chip.
   * @group Props
   */
  field;
  /**
   * Advisory information to display on input.
   * @group Props
   */
  placeholder;
  /**
   * Maximum number of entries allowed.
   * @group Props
   */
  max;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Whether to allow duplicate values or not.
   * @group Props
   */
  allowDuplicate = true;
  /**
   * Defines whether duplication check should be case-sensitive
   * @group Props
   */
  caseSensitiveDuplication = true;
  /**
   * Inline style of the input field.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the input field.
   * @group Props
   */
  inputStyleClass;
  /**
   * Whether to add an item on tab key press.
   * @group Props
   */
  addOnTab;
  /**
   * Whether to add an item when the input loses focus.
   * @group Props
   */
  addOnBlur;
  /**
   * Separator char to add an item when pressed in addition to the enter key.
   * @group Props
   */
  separator;
  /**
   * When enabled, a clear icon is displayed to clear the value.
   * @group Props
   */
  showClear = false;
  /**
   * Callback to invoke on chip add.
   * @param {ChipsAddEvent} event - Custom chip add event.
   * @group Emits
   */
  onAdd = new EventEmitter();
  /**
   * Callback to invoke on chip remove.
   * @param {ChipsRemoveEvent} event - Custom chip remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke on focus of input field.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke on blur of input field.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke on chip clicked.
   * @param {ChipsClickEvent} event - Custom chip click event.
   * @group Emits
   */
  onChipClick = new EventEmitter();
  /**
   * Callback to invoke on clear token clicked.
   * @group Emits
   */
  onClear = new EventEmitter();
  inputViewChild;
  containerViewChild;
  templates;
  itemTemplate;
  removeTokenIconTemplate;
  clearIconTemplate;
  value;
  onModelChange = () => {
  };
  onModelTouched = () => {
  };
  valueChanged;
  id = UniqueComponentId();
  focused;
  focusedIndex;
  filled;
  get focusedOptionId() {
    return this.focusedIndex !== null ? `${this.id}_chips_item_${this.focusedIndex}` : null;
  }
  get isMaxedOut() {
    return this.max && this.value && this.max === this.value.length;
  }
  constructor(document, el, cd) {
    this.document = document;
    this.el = el;
    this.cd = cd;
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this.itemTemplate = item.template;
          break;
        case "removetokenicon":
          this.removeTokenIconTemplate = item.template;
          break;
        case "clearicon":
          this.clearIconTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
    this.updateFilledState();
  }
  onWrapperClick() {
    this.inputViewChild?.nativeElement.focus();
  }
  onContainerFocus() {
    this.focused = true;
  }
  onContainerBlur() {
    this.focusedIndex = -1;
    this.focused = false;
  }
  onContainerKeyDown(event) {
    switch (event.code) {
      case "ArrowLeft":
        this.onArrowLeftKeyOn();
        break;
      case "ArrowRight":
        this.onArrowRightKeyOn();
        break;
      case "Backspace":
        this.onBackspaceKeyOn(event);
        break;
      default:
        break;
    }
  }
  onArrowLeftKeyOn() {
    if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
      this.focusedIndex = this.focusedIndex === null ? this.value.length - 1 : this.focusedIndex - 1;
      if (this.focusedIndex < 0)
        this.focusedIndex = 0;
    }
  }
  onArrowRightKeyOn() {
    if (this.inputViewChild.nativeElement.value.length === 0 && this.value && this.value.length > 0) {
      if (this.focusedIndex === this.value.length - 1) {
        this.focusedIndex = null;
        this.inputViewChild?.nativeElement.focus();
      } else {
        this.focusedIndex++;
      }
    }
  }
  onBackspaceKeyOn(event) {
    if (this.focusedIndex !== null) {
      this.removeItem(event, this.focusedIndex);
    }
  }
  onInput() {
    this.updateFilledState();
    this.focusedIndex = null;
  }
  onPaste(event) {
    if (!this.disabled) {
      if (this.separator) {
        const pastedData = (event.clipboardData || this.document.defaultView["clipboardData"]).getData("Text");
        pastedData.split(this.separator).forEach((val) => {
          this.addItem(event, val, true);
        });
        this.inputViewChild.nativeElement.value = "";
      }
      this.updateFilledState();
    }
  }
  updateFilledState() {
    if (!this.value || this.value.length === 0) {
      this.filled = this.inputViewChild && this.inputViewChild.nativeElement && this.inputViewChild.nativeElement.value != "";
    } else {
      this.filled = true;
    }
  }
  onItemClick(event, item) {
    this.onChipClick.emit({
      originalEvent: event,
      value: item
    });
  }
  writeValue(value) {
    this.value = value;
    this.updateMaxedOut();
    this.updateFilledState();
    this.cd.markForCheck();
  }
  registerOnChange(fn) {
    this.onModelChange = fn;
  }
  registerOnTouched(fn) {
    this.onModelTouched = fn;
  }
  setDisabledState(val) {
    this.disabled = val;
    this.cd.markForCheck();
  }
  resolveFieldData(data, field) {
    if (data && field) {
      if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.focusedIndex = null;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.focusedIndex = null;
    if (this.addOnBlur && this.inputViewChild.nativeElement.value) {
      this.addItem(event, this.inputViewChild.nativeElement.value, false);
    }
    this.onModelTouched();
    this.onBlur.emit(event);
  }
  removeItem(event, index) {
    if (this.disabled) {
      return;
    }
    let removedItem = this.value[index];
    this.value = this.value.filter((val, i) => i != index);
    this.focusedIndex = null;
    this.inputViewChild.nativeElement.focus();
    this.onModelChange(this.value);
    this.onRemove.emit({
      originalEvent: event,
      value: removedItem
    });
    this.updateFilledState();
    this.updateMaxedOut();
  }
  addItem(event, item, preventDefault) {
    this.value = this.value || [];
    if (item && item.trim().length) {
      const newItemIsDuplicate = this.caseSensitiveDuplication ? this.value.includes(item) : this.value.some((val) => val.toLowerCase() === item.toLowerCase());
      if ((this.allowDuplicate || !newItemIsDuplicate) && !this.isMaxedOut) {
        this.value = [...this.value, item];
        this.onModelChange(this.value);
        this.onAdd.emit({
          originalEvent: event,
          value: item
        });
      }
    }
    this.updateFilledState();
    this.updateMaxedOut();
    this.inputViewChild.nativeElement.value = "";
    if (preventDefault) {
      event.preventDefault();
    }
  }
  clear() {
    this.value = null;
    this.updateFilledState();
    this.onModelChange(this.value);
    this.updateMaxedOut();
    this.onClear.emit();
  }
  onKeyDown(event) {
    const inputValue = event.target.value;
    switch (event.code) {
      case "Backspace":
        if (inputValue.length === 0 && this.value && this.value.length > 0) {
          if (this.focusedIndex !== null) {
            this.removeItem(event, this.focusedIndex);
          } else
            this.removeItem(event, this.value.length - 1);
        }
        break;
      case "Enter":
      case "NumpadEnter":
        if (inputValue && inputValue.trim().length && !this.isMaxedOut) {
          this.addItem(event, inputValue, true);
        }
        break;
      case "ArrowLeft":
        if (inputValue.length === 0 && this.value && this.value.length > 0) {
          this.containerViewChild?.nativeElement.focus();
        }
        break;
      case "ArrowRight":
        event.stopPropagation();
        break;
      default:
        if (this.separator) {
          if (this.separator === event.key || event.key.match(this.separator)) {
            this.addItem(event, inputValue, true);
          }
        }
        break;
    }
  }
  updateMaxedOut() {
    if (this.inputViewChild && this.inputViewChild.nativeElement) {
      if (this.isMaxedOut) {
        this.inputViewChild.nativeElement.blur();
        this.inputViewChild.nativeElement.disabled = true;
      } else {
        if (this.disabled) {
          this.inputViewChild.nativeElement.blur();
        }
        this.inputViewChild.nativeElement.disabled = this.disabled || false;
      }
    }
  }
  static ɵfac = function Chips_Factory(t) {
    return new (t || _Chips)(ɵɵdirectiveInject(DOCUMENT), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Chips,
    selectors: [["p-chips"]],
    contentQueries: function Chips_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Chips_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c0, 5);
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputViewChild = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element", "p-inputwrapper"],
    hostVars: 6,
    hostBindings: function Chips_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("p-inputwrapper-filled", ctx.filled)("p-inputwrapper-focus", ctx.focused)("p-chips-clearable", ctx.showClear);
      }
    },
    inputs: {
      style: "style",
      styleClass: "styleClass",
      disabled: "disabled",
      field: "field",
      placeholder: "placeholder",
      max: "max",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      tabindex: "tabindex",
      inputId: "inputId",
      allowDuplicate: "allowDuplicate",
      caseSensitiveDuplication: "caseSensitiveDuplication",
      inputStyle: "inputStyle",
      inputStyleClass: "inputStyleClass",
      addOnTab: "addOnTab",
      addOnBlur: "addOnBlur",
      separator: "separator",
      showClear: "showClear"
    },
    outputs: {
      onAdd: "onAdd",
      onRemove: "onRemove",
      onFocus: "onFocus",
      onBlur: "onBlur",
      onChipClick: "onChipClick",
      onClear: "onClear"
    },
    features: [ɵɵProvidersFeature([CHIPS_VALUE_ACCESSOR])],
    decls: 8,
    vars: 31,
    consts: [[3, "ngClass", "ngStyle"], ["tabindex", "-1", "role", "listbox", 3, "ngClass", "click", "focus", "blur", "keydown"], ["container", ""], ["role", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["role", "option", 1, "p-chips-input-token", 3, "ngClass"], ["type", "text", 3, "disabled", "ngStyle", "keydown", "input", "paste", "focus", "blur"], ["inputtext", ""], [4, "ngIf"], ["role", "option", 3, "ngClass", "click"], ["token", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "p-chips-token-label", 4, "ngIf"], [1, "p-chips-token-label"], [3, "styleClass", "click", 4, "ngIf"], ["class", "p-chips-token-icon", 3, "click", 4, "ngIf"], [3, "styleClass", "click"], [1, "p-chips-token-icon", 3, "click"], [4, "ngTemplateOutlet"], ["class", "p-chips-clear-icon", 3, "click", 4, "ngIf"], [1, "p-chips-clear-icon", 3, "click"]],
    template: function Chips_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0)(1, "ul", 1, 2);
        ɵɵlistener("click", function Chips_Template_ul_click_1_listener() {
          return ctx.onWrapperClick();
        })("focus", function Chips_Template_ul_focus_1_listener() {
          return ctx.onContainerFocus();
        })("blur", function Chips_Template_ul_blur_1_listener() {
          return ctx.onContainerBlur();
        })("keydown", function Chips_Template_ul_keydown_1_listener($event) {
          return ctx.onContainerKeyDown($event);
        });
        ɵɵtemplate(3, Chips_li_3_Template, 5, 16, "li", 3);
        ɵɵelementStart(4, "li", 4)(5, "input", 5, 6);
        ɵɵlistener("keydown", function Chips_Template_input_keydown_5_listener($event) {
          return ctx.onKeyDown($event);
        })("input", function Chips_Template_input_input_5_listener() {
          return ctx.onInput();
        })("paste", function Chips_Template_input_paste_5_listener($event) {
          return ctx.onPaste($event);
        })("focus", function Chips_Template_input_focus_5_listener($event) {
          return ctx.onInputFocus($event);
        })("blur", function Chips_Template_input_blur_5_listener($event) {
          return ctx.onInputBlur($event);
        });
        ɵɵelementEnd()();
        ɵɵtemplate(7, Chips_li_7_Template, 3, 2, "li", 7);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngClass", ɵɵpureFunction4(23, _c4, ctx.disabled, ctx.focused, ctx.value && ctx.value.length || (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value) && (ctx.inputViewChild == null ? null : ctx.inputViewChild.nativeElement.value.length), ctx.focused))("ngStyle", ctx.style);
        ɵɵattribute("data-pc-name", "chips")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction0(28, _c5));
        ɵɵattribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-activedescendant", ctx.focused ? ctx.focusedOptionId : void 0)("aria-orientation", "horizontal")("data-pc-section", "container");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.value);
        ɵɵadvance();
        ɵɵproperty("ngClass", ɵɵpureFunction1(29, _c6, ctx.showClear && !ctx.disabled));
        ɵɵattribute("data-pc-section", "inputToken");
        ɵɵadvance();
        ɵɵclassMap(ctx.inputStyleClass);
        ɵɵproperty("disabled", ctx.disabled || ctx.isMaxedOut)("ngStyle", ctx.inputStyle);
        ɵɵattribute("id", ctx.inputId)("placeholder", ctx.value && ctx.value.length ? null : ctx.placeholder)("tabindex", ctx.tabindex);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.value != null && ctx.filled && !ctx.disabled && ctx.showClear);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, TimesCircleIcon, TimesIcon],
    styles: ["@layer primeng{.p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Chips, [{
    type: Component,
    args: [{
      selector: "p-chips",
      template: `
        <div
            [ngClass]="{
                'p-chips p-component p-input-wrapper': true,
                'p-disabled': disabled,
                'p-focus': focused,
                'p-inputwrapper-filled': (value && value.length) || (this.inputViewChild?.nativeElement.value && this.inputViewChild?.nativeElement.value.length),
                'p-inputwrapper-focus': focused,
            }"
            [ngStyle]="style"
            [class]="styleClass"
            [attr.data-pc-name]="'chips'"
            [attr.data-pc-section]="'root'"
        >
            <ul
                #container
                [ngClass]="{ 'p-inputtext p-chips-multiple-container': true }"
                tabindex="-1"
                role="listbox"
                [attr.aria-labelledby]="ariaLabelledBy"
                [attr.aria-label]="ariaLabel"
                [attr.aria-activedescendant]="focused ? focusedOptionId : undefined"
                [attr.aria-orientation]="'horizontal'"
                (click)="onWrapperClick()"
                (focus)="onContainerFocus()"
                (blur)="onContainerBlur()"
                (keydown)="onContainerKeyDown($event)"
                [attr.data-pc-section]="'container'"
            >
                <li
                    #token
                    *ngFor="let item of value; let i = index"
                    [attr.id]="id + '_chips_item_' + i"
                    role="option"
                    [attr.ariaLabel]="item"
                    [attr.aria-selected]="true"
                    [attr.aria-setsize]="value.length"
                    [attr.aria-posinset]="i + 1"
                    [attr.data-p-focused]="focusedIndex === i"
                    [ngClass]="{ 'p-chips-token': true, 'p-focus': focusedIndex === i }"
                    (click)="onItemClick($event, item)"
                    [attr.data-pc-section]="'token'"
                >
                    <ng-container *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-container>
                    <span *ngIf="!itemTemplate" class="p-chips-token-label" [attr.data-pc-section]="'label'">{{ field ? resolveFieldData(item, field) : item }}</span>
                    <ng-container *ngIf="!disabled">
                        <TimesCircleIcon [styleClass]="'p-chips-token-icon'" *ngIf="!removeTokenIconTemplate" (click)="removeItem($event, i)" [attr.data-pc-section]="'removeTokenIcon'" [attr.aria-hidden]="true" />
                        <span *ngIf="removeTokenIconTemplate" class="p-chips-token-icon" (click)="removeItem($event, i)" [attr.data-pc-section]="'removeTokenIcon'" [attr.aria-hidden]="true">
                            <ng-template *ngTemplateOutlet="removeTokenIconTemplate"></ng-template>
                        </span>
                    </ng-container>
                </li>
                <li class="p-chips-input-token" [ngClass]="{ 'p-chips-clearable': showClear && !disabled }" [attr.data-pc-section]="'inputToken'" role="option">
                    <input
                        #inputtext
                        type="text"
                        [attr.id]="inputId"
                        [attr.placeholder]="value && value.length ? null : placeholder"
                        [attr.tabindex]="tabindex"
                        (keydown)="onKeyDown($event)"
                        (input)="onInput()"
                        (paste)="onPaste($event)"
                        (focus)="onInputFocus($event)"
                        (blur)="onInputBlur($event)"
                        [disabled]="disabled || isMaxedOut"
                        [ngStyle]="inputStyle"
                        [class]="inputStyleClass"
                    />
                </li>
                <li *ngIf="value != null && filled && !disabled && showClear">
                    <TimesIcon *ngIf="!clearIconTemplate" [styleClass]="'p-chips-clear-icon'" (click)="clear()" />
                    <span *ngIf="clearIconTemplate" class="p-chips-clear-icon" (click)="clear()">
                        <ng-template *ngTemplateOutlet="clearIconTemplate"></ng-template>
                    </span>
                </li>
            </ul>
        </div>
    `,
      host: {
        class: "p-element p-inputwrapper",
        "[class.p-inputwrapper-filled]": "filled",
        "[class.p-inputwrapper-focus]": "focused",
        "[class.p-chips-clearable]": "showClear"
      },
      providers: [CHIPS_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      styles: ["@layer primeng{.p-chips{display:inline-flex}.p-chips-multiple-container{margin:0;padding:0;list-style-type:none;cursor:text;overflow:hidden;display:flex;align-items:center;flex-wrap:wrap}.p-chips-token{cursor:default;display:inline-flex;align-items:center;flex:0 0 auto;max-width:100%}.p-chips-token-label{min-width:0%;overflow:auto}.p-chips-token-label::-webkit-scrollbar{display:none}.p-chips-input-token{flex:1 1 auto;display:inline-flex}.p-chips-token-icon{cursor:pointer}.p-chips-input-token input{border:0 none;outline:0 none;background-color:transparent;margin:0;padding:0;box-shadow:none;border-radius:0;width:100%}.p-fluid .p-chips{display:flex}.p-chips-clear-icon{position:absolute;top:50%;margin-top:-.5rem;cursor:pointer}.p-chips-clearable .p-inputtext{position:relative}}\n"]
    }]
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    field: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    max: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    allowDuplicate: [{
      type: Input
    }],
    caseSensitiveDuplication: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    inputStyleClass: [{
      type: Input
    }],
    addOnTab: [{
      type: Input
    }],
    addOnBlur: [{
      type: Input
    }],
    separator: [{
      type: Input
    }],
    showClear: [{
      type: Input
    }],
    onAdd: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onChipClick: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["inputtext"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ChipsModule = class _ChipsModule {
  static ɵfac = function ChipsModule_Factory(t) {
    return new (t || _ChipsModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ChipsModule,
    declarations: [Chips],
    imports: [CommonModule, InputTextModule, SharedModule, TimesCircleIcon, TimesIcon],
    exports: [Chips, InputTextModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, InputTextModule, SharedModule, TimesCircleIcon, TimesIcon, InputTextModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChipsModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, InputTextModule, SharedModule, TimesCircleIcon, TimesIcon],
      exports: [Chips, InputTextModule, SharedModule],
      declarations: [Chips]
    }]
  }], null, null);
})();
export {
  CHIPS_VALUE_ACCESSOR,
  Chips,
  ChipsModule
};
//# sourceMappingURL=primeng_chips.js.map
