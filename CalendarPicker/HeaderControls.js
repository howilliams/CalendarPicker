import React from 'react'; 
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import { Utils } from './Utils';
import Controls from './Controls';

export default function HeaderControls(props) {
  const {
    styles,
    initialDate,
    currentMonth,
    currentYear,
    onPressNext,
    onPressPrevious,
    months,
    previousTitle,
    nextTitle,
    textStyle,
  } = props;
  const MONTHS = months? months : Utils.MONTHS; // English Month Array
  // getMonth() call below will return the month number, we will use it as the
  // index for month array in english
  const previous = previousTitle ? previousTitle : 'Previous';
  const next = nextTitle ? nextTitle : 'Next';
  const month = MONTHS[currentMonth];
  const year = currentYear;

  return (
    <View style={styles.headerWrapper}>
      <View style={styles.monthSelector}>
        <Controls
          label={previous}
          onPressControl={onPressPrevious}
          styles={styles.prev}
          textStyles={textStyle}
        />
      </View>
      <View>
        <Text style={[styles.monthLabel, textStyle]}>
           { month } { year }
        </Text>
      </View>
      <View style={styles.monthSelector}>
        <Controls
          label={next}
          onPressControl={onPressNext}
          styles={styles.next}
          textStyles={textStyle}
        />
      </View>
    </View>
  );
}

HeaderControls.propTypes = {
  initialDate: PropTypes.instanceOf(Date),
  currentMonth: PropTypes.number,
  currentYear: PropTypes.number,
  onPressNext: PropTypes.func,
  onPressPrevious: PropTypes.func,
};
