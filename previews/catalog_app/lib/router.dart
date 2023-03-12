import 'package:zero_catalog/pages/components_page.dart';
import 'package:zero_flutter/zero_flutter.dart';

// pages
import 'package:zero_catalog/pages/login.dart';

Router routerBuilder(Locale locale) {
  return Router(
    locale,
    initialPath: const ComponentsPage(null).metadata(locale).path,
    pages: [
      (state) => LoginPage(state),
      (state) => ComponentsPage(state),
    ],
  );
}
