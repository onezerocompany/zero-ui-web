import 'package:go_router/go_router.dart';
import 'package:zero_flutter/globals.dart';
import 'package:zero_flutter/zero_flutter.dart';

class TransitionPage extends CustomTransitionPage {
  static const AdaptiveValue<bool> shouldTransition = AdaptiveValue<bool>(
    defaultValue: false,
    values: [
      AdaptiveRangedValue(
        minBreakpoint: BreakPoint.md,
        value: true,
      ),
    ],
  );

  final AxisDirection? inDirection;
  final AxisDirection? outDirection;

  TransitionPage({
    required super.key,
    required super.name,
    required super.child,
    required int level,
    this.inDirection,
    this.outDirection,
  }) : super(
          transitionDuration: pageTransitionDuration,
          transitionsBuilder: (
            context,
            animation,
            secondaryAnimation,
            child,
          ) {
            final shouldTransition = TransitionPage.shouldTransition
                    .value(AdaptiveContext.breakpoint(context)) ||
                level < 1;
            if (!shouldTransition) {
              return child;
            } else {
              return ClipRect(
                child: SlideTransition(
                  position: Tween(
                    begin: Offset(
                      inDirection == AxisDirection.left
                          ? 1
                          : (inDirection == AxisDirection.right ? -1 : 0),
                      inDirection == AxisDirection.up
                          ? 1
                          : (inDirection == AxisDirection.down ? -1 : 0),
                    ),
                    end: Offset.zero,
                  )
                      .chain(CurveTween(curve: pageTransitionCurve))
                      .animate(animation),
                  child: SlideTransition(
                    position: Tween(
                      begin: Offset.zero,
                      end: Offset(
                        outDirection == AxisDirection.left
                            ? -1
                            : (outDirection == AxisDirection.right ? 1 : 0),
                        outDirection == AxisDirection.up
                            ? -1
                            : (outDirection == AxisDirection.down ? 1 : 0),
                      ),
                    )
                        .chain(CurveTween(curve: pageTransitionCurve))
                        .animate(secondaryAnimation),
                    child: child,
                  ),
                ),
              );
            }
          },
        );
}
