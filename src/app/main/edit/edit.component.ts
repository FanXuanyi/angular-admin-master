import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private _renderer2: Renderer2, @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
    const s = this._renderer2.createElement(('script'));
    s.text = `{CKEDITOR.replace( 'editor1' );}`;
    this._renderer2.appendChild(this._document.body, s);
  }

}
