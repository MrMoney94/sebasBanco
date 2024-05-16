import {MutableRefObject} from 'react';
import {BottomSheetRef, DataBottomSheet} from '../model';

export class BottomSheetController {
  static modalRef: MutableRefObject<BottomSheetRef>;
  static setBottomSheetRef = (ref: any) => {
    this.modalRef = ref;
  };

  static popup = (data: DataBottomSheet) => {
    this.modalRef.current?.show(data);
  };

  static popdown = () => {
    this.modalRef.current?.close();
  };
}
