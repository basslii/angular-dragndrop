import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-manager',
  templateUrl: './upload-manager.component.html',
  styleUrls: ['./upload-manager.component.css']
})
export class UploadManagerComponent implements OnInit {

  isHovering!: boolean;
  files: File[] = [];

  constructor() { 
    const input = document.getElementById('avatar');

    input?.addEventListener('change', event => {
      const target = event.target as HTMLInputElement;

      console.log(target.files)
    })
  }

  ngOnInit(): void {
  }


  toggleHover(event: boolean){
    this.isHovering = event;
    console.log("Is it hovering ,", this.isHovering)
  }

  GetDisabilityCertFile(files: any) {
    for(let i = 0; i < files.length; i++) {
      console.log('Adding Files In Container ', files.item(i));
      this.files.push(files.item(i));
    }
  }

  // @ViewChild('avatar', { static: false })
  // InputVar!: ElementRef;

  // cleardisabilitycontainer() {
  //   this.InputVar.nativeElement.value = undefined;
  //   console.log("File Is CLeared ,", this.InputVar.nativeElement.value)
  // }

  // cleardisabilitycontainer(files: any) {
  //   this.files.forEach((value, index) => {
  //     if(value == files ) {
  //       delete this.files[index]
  //     }
  //   })
  //   console.log("File Is Cleared", this.files)
  // }

}
