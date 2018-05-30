# Cumulocity-ModifyDefaultApp
We can able to change and modify the plugins of Cumulocities Default Core app. 
## Steps:
To add new plugins to Cumulocity Core apps from UI interface you can do:
1.	Go to Administration application -> Own applications
2.	Click on add new
3.	Select clone existing application
4.	Select administration and fill the form as shown on image.
5.	Click clone
6.	When ready click done.
7.	On administration app box click on add plugin 
8.	Upload your plugin here
For cockpit and devicemanagement repeat those steps.
Other way is more developers friendly (and allows easily install updated UI when released).
# fetch latest version of cumulocity ui
c8y install

# print plugin imports used for devicemanagement
c8y util:showimports devicemanagement

# build device management app
c8y build:app devicemanagement

# retrieve manifest as is
cat build/devicemanagement/cumulocity.json
that last file has everything needed to customize device management app. Extract it outside, this is your appliciation manifest to work with now, add your plugin to list of imports and build that app.
After those steps are completed you can run:
c8y deploy:app devicemanagement

To remove  plugins from apps through UI interface you can do:
1.	Go to Administration application -> Own applications
2.	Select any one of the Cumulocity core application you need to remove some plugins.
3.	Then select plugins. It shows the entire  list of plugins.
4.	Finally you can remove plugins as your wish.

To remove default plugins from Cumulocity Core apps through UI interface you can do:
1.Go to Administration application -> Own applications
2.Click on add new
3.Select clone existing application
4.Select administration and fill the form as shown on image.
5.Click clone
6.When ready click done.
7.Go to Administration application -> Own applications
8.Select any one of the Cumulocity core application you need to remove some plugins.
9.Then select plugins. It shows the entire  list of plugins.
10.Finally you can remove plugins as your wish.

