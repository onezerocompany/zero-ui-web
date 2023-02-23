import 'package:flutter/services.dart';
import 'package:zero_flutter/zero_flutter.dart';

class OptionsInput<ValueType> extends InputField<ValueType> {
  const OptionsInput(
    BuildContext context, {
    super.key,

    // InputField specific
    required super.id,
    super.validator,
    super.errorBuilder,
    super.alignment = InputFieldAlignment.center,
    super.dense = false,
    super.padding = const EdgeInsets.all(16),
    super.fillColor,
    super.leading,
    super.trailing,
    super.enabled = true,
    super.label,
    super.sanitizer,

    // OptionsInput specific
    required this.options,
    this.selectLabel = 'Select an option',
  });

  final List<InputOption<ValueType>> options;
  final String selectLabel;

  @override
  ValueType defaultValue() {
    return options.first.value;
  }

  @override
  InputFieldState<ValueType, OptionsInput> createState() {
    return _OptionsInputState();
  }
}

class _OptionsInputState<ValueType>
    extends InputFieldState<ValueType, OptionsInput<ValueType>> {
  @override
  Widget fieldBuilder(
    BuildContext context, {
    required InputState<ValueType> state,
    required FocusNode focusNode,
  }) {
    final colors = Theme.of(context).colorScheme;

    final valueTheme = TextButton.defaultConfig.copyWith(
      paddings: const {ButtonSize.medium: EdgeInsets.only(bottom: 2, top: 1)},
      fillColor: colors.secondary,
      contentColor: colors.onBackground,
      hoverBackground: false,
    );

    InputOption? currentOption = widget.options.firstWhereOrNull(
      (option) => option.value == state.value,
    );

    showPicker() async {
      final selected = await OptionsDialog.show<ValueType>(
        currentValue: currentOption?.value,
        options: widget.options,
      );
      if (mounted && selected != null) {
        widget
            .effectiveController(context)
            ?.updateValue(widget.id, selected.value);
      }
    }

    return Focus(
      focusNode: fieldFocusNode,
      onKeyEvent: (node, event) {
        if (event.logicalKey == LogicalKeyboardKey.space ||
            event.logicalKey == LogicalKeyboardKey.enter) {
          showPicker();
          return KeyEventResult.handled;
        }
        return KeyEventResult.ignored;
      },
      child: TextButton(
        config: valueTheme,
        text: currentOption?.label ?? widget.selectLabel,
        onPressed: showPicker,
      ),
    );
  }
}