/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * Defines the shape of the adapter expected by the foundation.
 * Implement this adapter for your framework of choice to delegate updates to
 * the component in your framework of choice. See architecture documentation
 * for more details.
 * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
 */
export interface MDCTextFieldHelperTextAdapter {
    /**
     * Adds a class to the helper text element.
     */
    addClass(className: string): void;
    /**
     * Removes a class from the helper text element.
     */
    removeClass(className: string): void;
    /**
     * Returns whether or not the helper text element contains the given class.
     */
    hasClass(className: string): boolean;
    /**
     * @return the specified attribute's value on the helper text element.
     */
    getAttr(attr: string): string | null;
    /**
     * Sets an attribute with a given value on the helper text element.
     */
    setAttr(attr: string, value: string): void;
    /**
     * Removes an attribute from the helper text element.
     */
    removeAttr(attr: string): void;
    /**
     * Sets the text content for the helper text element.
     */
    setContent(content: string): void;
}
