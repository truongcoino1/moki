package ambe.com.vn.moki.model;

/**
 * Created by HoangNV on 9/17/2017.
 */

public class Model_listview_dlg {
    private String title;
    private String subTitle;

    public Model_listview_dlg(String title, String subTitle) {
        this.title = title;
        this.subTitle = subTitle;
    }

    public Model_listview_dlg() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getSubTitle() {
        return subTitle;
    }

    public void setSubTitle(String subTitle) {
        this.subTitle = subTitle;
    }
}
