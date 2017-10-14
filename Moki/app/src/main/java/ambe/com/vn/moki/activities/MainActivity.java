package ambe.com.vn.moki.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
import android.support.v7.view.menu.MenuAdapter;
import android.view.Gravity;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.ListView;

import com.infideap.drawerbehavior.AdvanceDrawerLayout;

import java.util.ArrayList;

import ambe.com.vn.moki.R;
import ambe.com.vn.moki.adapters.MenuMainAdapter;
import ambe.com.vn.moki.fragments.TinTucFragment;
import ambe.com.vn.moki.fragments.TrangChuFragment;
import ambe.com.vn.moki.models.products.Image;
import ambe.com.vn.moki.utils.Utils;

public class MainActivity extends AppCompatActivity {

    public static final String PREF_USER_FIRST_TIME = "user_first_time";
    FragmentManager fragmentManager;
    private Toolbar toolbar;
    private FloatingActionButton fab;
    private AdvanceDrawerLayout drawer;
    private NavigationView navigationView;
    private boolean isUserFirstTime;
    private ImageView imgShell;
    private ListView listMenu;
    private ArrayList<ambe.com.vn.moki.models.MenuItem> arrMenuItem;
    private MenuMainAdapter menuAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        isUserFirstTime = Boolean.valueOf(Utils.readSharedSetting(MainActivity.this, PREF_USER_FIRST_TIME, "true"));

        Intent introIntent = new Intent(MainActivity.this, IntroActivity.class);
        introIntent.putExtra(PREF_USER_FIRST_TIME, isUserFirstTime);

        if (isUserFirstTime)
            startActivity(introIntent);

        setContentView(R.layout.activity_main);
        toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("");



        imgShell = findViewById(R.id.img_shell);
        drawer = findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        toolbar.setNavigationIcon(R.drawable.icon_menu);
        drawer.addDrawerListener(toggle);

        navigationView = (NavigationView) findViewById(R.id.nav_view);
        fragmentManager = getSupportFragmentManager();
        TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
        fragmentManager.beginTransaction().replace(R.id.frame_main, trangChuFragment).commit();
        listMenu = findViewById(R.id.list_menu);
        arrMenuItem = new ArrayList<ambe.com.vn.moki.models.MenuItem>();
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.setting_home_icon, getString(R.string.trang_chu), 1));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_news_normal, getString(R.string.tin_tuc), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_like_normal, getString(R.string.danh_sach_yeu_thich), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_exhibit_normal, getString(R.string.danh_sach_ban), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.product_price_total, getString(R.string.danh_sach_mua), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_charity, getString(R.string.tu_thien), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_setting_normal, getString(R.string.thiet_lap), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_contact_normal, getString(R.string.trung_tam_ho_tro), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.setting_account_icon, getString(R.string.gioi_thieu_moki), 0));
        arrMenuItem.add(new ambe.com.vn.moki.models.MenuItem(R.drawable.sidemenu_icon_logout_normal, getString(R.string.dang_nhap), 0));
        menuAdapter = new MenuMainAdapter(arrMenuItem, this);
        listMenu.setAdapter(menuAdapter);


        addEvents();
        drawer.useCustomBehavior(Gravity.START);
        drawer.useCustomBehavior(Gravity.END);


    }

    private void addEvents() {
        listMenu.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> adapterView, View view, int i, long l) {
                switch (i) {
                    case 0:
                        TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
                        fragmentManager.beginTransaction().replace(R.id.frame_main, trangChuFragment).commit();
                        drawer.closeDrawer(GravityCompat.START);
                        for (int j=0;j<arrMenuItem.size();j++){
                            if (j != i){
                                arrMenuItem.get(j).setCheck(0);
                            } else {
                                arrMenuItem.get(i).setCheck(1);
                            }
                            menuAdapter.notifyDataSetChanged();
                        }


                        break;
                    case 1:
                        TinTucFragment tinTucFragment = TinTucFragment.newInstance();
                        fragmentManager.beginTransaction().replace(R.id.frame_main, tinTucFragment).commit();
                        drawer.closeDrawer(GravityCompat.START);

                        for (int j=0;j<arrMenuItem.size();j++){
                            if (j != i){
                                arrMenuItem.get(j).setCheck(0);
                            } else {
                                arrMenuItem.get(i).setCheck(1);
                            }

                            menuAdapter.notifyDataSetChanged();
                        }

                        break;
                }
            }
        });
    }

    @Override
    public void onBackPressed() {
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }


}
