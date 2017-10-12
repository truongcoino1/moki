package ambe.com.vn.moki.activities;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentTransaction;
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
import android.widget.ImageView;

import com.infideap.drawerbehavior.AdvanceDrawerLayout;

import ambe.com.vn.moki.R;
import ambe.com.vn.moki.fragments.TinTucFragment;
import ambe.com.vn.moki.fragments.TrangChuFragment;
import ambe.com.vn.moki.models.products.Image;
import ambe.com.vn.moki.utils.Utils;

public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {

    public static final String PREF_USER_FIRST_TIME = "user_first_time";
    FragmentManager fragmentManager;
    private Toolbar toolbar;
    private FloatingActionButton fab;
    private AdvanceDrawerLayout drawer;
    private NavigationView navigationView;
    private boolean isUserFirstTime;
    private ImageView imgShell;

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


        imgShell=findViewById(R.id.img_shell);
        drawer =  findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        toolbar.setNavigationIcon(R.drawable.icon_menu);
        drawer.addDrawerListener(toggle);

        navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);

        fragmentManager = getSupportFragmentManager();
        TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
        fragmentManager.beginTransaction().replace(R.id.frame_main, trangChuFragment).commit();

        drawer.useCustomBehavior(Gravity.START);
        drawer.useCustomBehavior(Gravity.END);
    }

    @Override
    public void onBackPressed() {
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }



    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.menu_trang_chu) {

            TrangChuFragment trangChuFragment = TrangChuFragment.newInstance();
            fragmentManager.beginTransaction().replace(R.id.frame_main, trangChuFragment).commit();


        } else if (id == R.id.menu_tin_tuc) {

            TinTucFragment tinTucFragment = TinTucFragment.newInstance();
            fragmentManager.beginTransaction().replace(R.id.frame_main, tinTucFragment).commit();


        } else if (id == R.id.menu_danh_sach_yeu_thich) {

        } else if (id == R.id.menu_danh_sach_ban) {

        } else if (id == R.id.menu_danh_sach_mua) {

        } else if (id == R.id.menu_tu_thien) {

        } else if (id == R.id.menu_thiet_lap) {

        } else if (id == R.id.menu_trung_tam_ho_tro) {

        } else if (id == R.id.menu_gioi_thieu_moki) {

        } else if (id == R.id.menu_dang_nhap) {

        }

        drawer.closeDrawer(GravityCompat.START);
        return true;
    }
}
