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

import {
  ChangeDetectorRef, ChangeDetectionStrategy, Component, ViewEncapsulation
} from '@angular/core';

import {AjfReportRenderer as AjfCoreReportRenderer} from '@ajf/core/reports';


@Component({
  moduleId: module.id,
  selector: 'ajf-report',
  templateUrl: 'report.html',
  styleUrls: ['report.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: [
    'instance'
  ],
})
export class AjfReportRenderer extends AjfCoreReportRenderer {
  constructor(cdr: ChangeDetectorRef) {
    super(cdr);
  }
}
