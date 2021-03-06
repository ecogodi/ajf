/**
 * @license
 * Copyright (C) 2018 Gnucoop soc. coop.
 *
 * This file is part of the Advanced JSON forms (ajf).
 *
 * Advanced JSON forms (ajf) is free software: you can redistribute it and/or
 * modify it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the License,
 * or (at your option) any later version.
 *
 * Advanced JSON forms (ajf) is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
 * General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Advanced JSON forms (ajf).
 * If not, see http://www.gnu.org/licenses/.
 *
 */

import {Directionality} from '@angular/cdk/bidi';
import {OverlayContainer} from '@angular/cdk/overlay';
import {ChangeDetectorRef, Component, ElementRef, Inject, ViewEncapsulation} from '@angular/core';
import {DevAppDirectionality} from './dev-app-directionality';

/** Root component for the dev-app demos. */
@Component({
  moduleId: module.id,
  selector: 'dev-app-layout',
  templateUrl: 'dev-app-layout.html',
  styleUrls: ['dev-app-layout.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DevAppLayout {
  dark = false;
  navItems = [
    {name: 'Examples', route: '/examples'},
    {name: 'Barcode', route: '/barcode'},
    {name: 'Calendar', route: '/calendar'},
    {name: 'Checkbox group', route: '/checkbox-group'},
    {name: 'Fields', route: '/fields'},
    {name: 'Form builder', route: '/form-builder'},
    {name: 'Forms', route: '/forms'},
    {name: 'Image', route: '/image'},
    {name: 'Node icon', route: '/node-icon'},
    {name: 'Page slider', route: '/page-slider'},
    {name: 'Report builder', route: '/report-builder'},
    {name: 'Reports', route: '/reports'},
    {name: 'Time', route: '/time'},
    {name: 'Widgets', route: '/widgets'},
  ];

  constructor(
      private _element: ElementRef<HTMLElement>, private _overlayContainer: OverlayContainer,
      @Inject(Directionality) public dir: DevAppDirectionality, cdr: ChangeDetectorRef) {
    dir.change.subscribe(() => cdr.markForCheck());
  }

  toggleFullscreen() {
    // Cast to `any`, because the typings don't include the browser-prefixed methods.
    const elem = this._element.nativeElement.querySelector('.demo-content') as any;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullScreen) {
      elem.webkitRequestFullScreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.msRequestFullScreen) {
      elem.msRequestFullScreen();
    }
  }

  toggleTheme() {
    const darkThemeClass = 'demo-unicorn-dark-theme';

    this.dark = !this.dark;

    if (this.dark) {
      this._element.nativeElement.classList.add(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.add(darkThemeClass);
    } else {
      this._element.nativeElement.classList.remove(darkThemeClass);
      this._overlayContainer.getContainerElement().classList.remove(darkThemeClass);
    }
  }
}
