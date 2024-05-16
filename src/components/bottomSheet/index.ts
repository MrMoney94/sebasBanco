import {BottomSheetController} from './controller';
import {DataBottomSheet} from './model';

export class BottomSheet {
  static show = (data: DataBottomSheet) => {
    BottomSheetController.popup({...data});
  };

  static close = () => {
    BottomSheetController.popdown();
  };
}
