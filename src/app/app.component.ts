import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  /** 標題 */
  title = 'Lodash';
  /** 所有類型 */
  types = ['Collection', 'Lang', 'String'];
  /** 當前選擇的類型 */
  selectedType = this.types[0];
  /** [手機版] 是否顯示側邊欄 */
  showMenu = false;
}

