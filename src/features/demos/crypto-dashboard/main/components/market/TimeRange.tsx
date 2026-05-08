import { SELECTABLE_ASSETS, TIME_RANGE_OPTIONS} from "../../constants/marketData"
import { DropdownOption } from "../../types/crypto";
import { DropdownCustom } from "../ui/DropdownCustom";

interface Props {
  selectedTime: string;
  onSelectTime: (selectTime: string) => void;
  selectedCoin1: string;
  selectedCoin2: string;
}

export const TimeRange = ({selectedTime, onSelectTime, selectedCoin1, selectedCoin2}: Props) => {
  const selectableTimeRange: DropdownOption[] = TIME_RANGE_OPTIONS.map(time => ({
    value: time.value,
    label: time.label
  }))
  
  return (
    <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-sm">
      <div className="mb-2 gap-2 flex flex-row items-center">
        <h3 className="text-lg font-bold text-slate-900">Rendimiento:</h3>
        <DropdownCustom
          options={selectableTimeRange}
          selectedValue={selectedTime}
          onValueChange={(value) => onSelectTime(value)}
        />
      </div>
      <p className="text-lg text-slate-500">
        {SELECTABLE_ASSETS.find(a => a.id === selectedCoin1)?.name} vs {SELECTABLE_ASSETS.find(a => a.id === selectedCoin2)?.name}
      </p>
    </div>
  )
}