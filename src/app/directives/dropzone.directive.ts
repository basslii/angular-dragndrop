import {
  Directive,
  EventEmitter,
  Output,
  HostListener,
  HostBinding,
} from '@angular/core';
@Directive({
  selector: '[dropzone]',
})
export class DropzoneDirective   {
  @Output() dropped = new EventEmitter<any>();
  @Output() hovered = new EventEmitter<boolean>();


  // Drop Event
  @HostListener('drop', ['$event']) public GetDisabilityCertFile(event: any) {
    event.preventDefault();
    event.stopPropagation();

    const files = event.dataTransfer.files;
    if (files.length > 0) {
      this.dropped.emit(files);
    }

    this.hovered.emit(false);
  }
 
  // Dragover Event
  @HostListener('dragover', ['$event']) public onDragOver(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.hovered.emit(true);
  }
  // Dragleave Event
  @HostListener('dragleave', ['$event']) public onDragLeave(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.hovered.emit(false);
  }
  
  @HostBinding('style.background-color') private background = '#ffffff';
}
